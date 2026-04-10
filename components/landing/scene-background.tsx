"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function RotatingGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.04;
    }
  });
  return <group ref={group}>{children}</group>;
}

function HeroShapes() {
  return (
    <RotatingGroup>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.65}>
        <mesh position={[-1.6, 0.4, 0]}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0e7490"
            emissiveIntensity={0.35}
            metalness={0.65}
            roughness={0.25}
            wireframe
          />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.55}>
        <mesh position={[1.5, -0.35, -0.4]}>
          <sphereGeometry args={[1, 48, 48]} />
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#0369a1"
            emissiveIntensity={0.2}
            metalness={0.5}
            roughness={0.35}
            distort={0.45}
            speed={2.2}
          />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.4}>
        <mesh position={[0.2, 0.9, -1.2]} rotation={[0.6, 0.9, 0]}>
          <torusGeometry args={[0.85, 0.22, 24, 64]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#155e75"
            emissiveIntensity={0.25}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </RotatingGroup>
  );
}

export default function SceneBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#030712"]} />
        <fog attach="fog" args={["#030712", 8, 22]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[6, 8, 4]} intensity={1.1} color="#e0f2fe" />
        <pointLight position={[-6, -2, 4]} intensity={0.85} color="#22d3ee" />
        <HeroShapes />
        <Stars
          radius={90}
          depth={45}
          count={1800}
          factor={2.8}
          saturation={0}
          fade
          speed={0.35}
        />
      </Canvas>
    </div>
  );
}
