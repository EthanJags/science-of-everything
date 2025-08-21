"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Object3D } from "three";

function Earth() {
  const { scene } = useGLTF("/assets/Earth.glb");
  const earthRef = useRef<Object3D>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015; // Slow rotation speed
    }
  });

  return <primitive ref={earthRef} object={scene} scale={0.003} />;
}

export default function EarthScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={5} />
      <Earth />
      <OrbitControls />
    </Canvas>
  );
}
