"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Scene3D } from "./Scene3D";

interface Props { isHovered: boolean; isClicked: boolean; }

function GraniteCube({ isHovered }: { isHovered: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = -0.5 + Math.sin(t * 0.15) * 0.015;
  });

  return (
    <RoundedBox ref={ref} args={[1.5, 1.7, 1.4]} radius={0.03} smoothness={4}
      rotation={[0, -0.5, 0]} castShadow receiveShadow>
      <meshPhysicalMaterial
        color="#484850"
        metalness={0.65}
        roughness={0.45}
        envMapIntensity={1.0}
        clearcoat={0.1}
        clearcoatRoughness={0.3}
      />
    </RoundedBox>
  );
}

export function DarkCube({ isHovered, isClicked }: Props) {
  return (
    <Scene3D
      className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[290px] lg:h-[290px]"
      cameraPosition={[0, 1.8, 5]}
      cameraFov={30}
      shadowY={-1.05}
      floatSpeed={1}
      floatIntensity={0.08}
      isHovered={isHovered}
    >
      <GraniteCube isHovered={isHovered} />
    </Scene3D>
  );
}
