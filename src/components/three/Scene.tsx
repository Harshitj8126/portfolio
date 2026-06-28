"use client";

import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <ParticleField />
    </Canvas>
  );
}
