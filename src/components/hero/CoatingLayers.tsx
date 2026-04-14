"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Scene3D } from "./Scene3D";

interface Props { isHovered: boolean; isClicked: boolean; }

/** Single coating plate with transmission + clearcoat */
function Plate({
  position,
  color,
  metalness,
  roughness,
  clearcoat,
  clearcoatRoughness,
  envMapIntensity,
  opacity,
}: {
  position: [number, number, number];
  color: string;
  metalness: number;
  roughness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  envMapIntensity: number;
  opacity: number;
}) {
  return (
    <RoundedBox
      args={[2, 0.06, 2]}
      radius={0.02}
      smoothness={4}
      position={position}
      rotation={[0, Math.PI / 4, 0]}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        clearcoat={clearcoat}
        clearcoatRoughness={clearcoatRoughness}
        envMapIntensity={envMapIntensity}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </RoundedBox>
  );
}

function Plates({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const spread = isHovered ? 0.45 : 0.3;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.02;
  });

  return (
    <group ref={groupRef} rotation={[-0.45, 0, 0]}>
      {/* Bottom plate — darkest, most translucent */}
      <Plate
        position={[0, -spread, 0]}
        color="#3a5a90"
        metalness={0.7}
        roughness={0.35}
        clearcoat={0.3}
        clearcoatRoughness={0.2}
        envMapIntensity={1.0}
        opacity={0.55}
      />
      {/* Middle plate */}
      <Plate
        position={[0, 0, 0]}
        color="#5a88c0"
        metalness={0.75}
        roughness={0.28}
        clearcoat={0.4}
        clearcoatRoughness={0.15}
        envMapIntensity={1.2}
        opacity={0.7}
      />
      {/* Top plate — brightest, most reflective, polished */}
      <Plate
        position={[0, spread, 0]}
        color="#a0c8f0"
        metalness={0.85}
        roughness={0.12}
        clearcoat={0.7}
        clearcoatRoughness={0.05}
        envMapIntensity={1.8}
        opacity={0.9}
      />
    </group>
  );
}

export function CoatingLayers({ isHovered, isClicked }: Props) {
  return (
    <Scene3D
      className="w-[200px] h-[170px] sm:w-[260px] sm:h-[210px] lg:w-[300px] lg:h-[250px]"
      cameraPosition={[0, 2.8, 5]}
      cameraFov={26}
      shadowY={-0.8}
      isHovered={isHovered}
    >
      <Plates isHovered={isHovered} />
    </Scene3D>
  );
}
