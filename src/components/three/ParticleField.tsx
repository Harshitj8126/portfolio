"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 600;

export default function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Add mouse listener safely
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate a soft circular radial gradient texture for soft bokeh/dust
  const particleTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.2)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  const { positions, colors, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Spread particles in a large volume
      pos[i3] = (Math.random() - 0.5) * 20;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = (Math.random() - 0.5) * 15;

      // Color: mix of warm orange, white, and cyan dust
      const colorType = Math.random();
      if (colorType < 0.35) {
        // Warm orange embers
        col[i3] = 1.0;
        col[i3 + 1] = 0.6 + Math.random() * 0.2;
        col[i3 + 2] = 0.15 + Math.random() * 0.15;
      } else if (colorType < 0.65) {
        // White/silver dust
        const brightness = 0.7 + Math.random() * 0.3;
        col[i3] = brightness;
        col[i3 + 1] = brightness;
        col[i3 + 2] = brightness;
      } else {
        // Soft cyan
        col[i3] = 0.0;
        col[i3 + 1] = 0.7 + Math.random() * 0.3;
        col[i3 + 2] = 0.85 + Math.random() * 0.15;
      }

      // Very slow drift velocities
      vel[i3] = (Math.random() - 0.5) * 0.01;
      vel[i3 + 1] = Math.random() * 0.02 + 0.005; // Mostly drifting up
      vel[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    return { positions: pos, colors: col, velocities: vel };
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    const positionsAttr = mesh.geometry.attributes.position;
    const posArray = positionsAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];

      // Add gentle sine wave motion based on time
      posArray[i3] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;

      // Wrap around bounds
      if (posArray[i3 + 1] > 10) posArray[i3 + 1] = -10;
      if (posArray[i3 + 1] < -10) posArray[i3 + 1] = 10;
      if (posArray[i3] > 10) posArray[i3] = -10;
      if (posArray[i3] < -10) posArray[i3] = 10;
    }
    positionsAttr.needsUpdate = true;

    // Mouse parallax effect (subtle)
    const targetX = mouseRef.current.x * 0.5;
    const targetY = mouseRef.current.y * 0.5;

    mesh.rotation.y += (targetX - mesh.rotation.y) * delta * 0.5;
    mesh.rotation.x += (targetY - mesh.rotation.x) * delta * 0.5;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        map={particleTexture || undefined}
        alphaMap={particleTexture || undefined}
        alphaTest={0.001}
      />
    </points>
  );
}
