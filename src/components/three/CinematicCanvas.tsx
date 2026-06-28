"use client";

import { Suspense, lazy } from "react";

const Scene = lazy(() => import("./Scene"));

export default function CinematicCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </div>
  );
}
