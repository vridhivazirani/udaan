"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function OrigamiCrane() {
  const meshRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Mesh>(null);
  const rightWingRef = useRef<THREE.Mesh>(null);

  // Simple procedural crane geometry
  // We'll use multiple planes to simulate the folds
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#F5F0E8",
    side: THREE.DoubleSide,
    roughness: 0.8,
    metalness: 0.1,
  }), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(time) * 0.1;
    }

    if (leftWingRef.current && rightWingRef.current) {
      // Wing flap animation
      const flap = Math.sin(time * 2) * 0.5;
      leftWingRef.current.rotation.z = flap;
      rightWingRef.current.rotation.z = -flap;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Body Central Fold */}
      <mesh material={material}>
        <coneGeometry args={[0.2, 1, 4]} />
        <meshStandardMaterial color="#EAE4DA" />
      </mesh>

      {/* Left Wing */}
      <mesh ref={leftWingRef} position={[-0.1, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 0.6]} />
        <primitive object={material} attach="material" />
      </mesh>

      {/* Right Wing */}
      <mesh ref={rightWingRef} position={[0.1, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 0.6]} />
        <primitive object={material} attach="material" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0, 0.5]} rotation={[Math.PI / 4, 0, 0]}>
        <coneGeometry args={[0.05, 0.3, 3]} />
        <meshStandardMaterial color="#EAE4DA" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0, -0.5]} rotation={[-Math.PI / 4, 0, 0]}>
        <coneGeometry args={[0.05, 0.4, 3]} />
        <meshStandardMaterial color="#EAE4DA" />
      </mesh>
    </group>
  );
}

export default function BirdCanvas() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <OrigamiCrane />
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
