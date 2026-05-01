import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, OrbitControls, Stars, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const SpinningKnot = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.25;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
      <TorusKnot ref={ref} args={[1.1, 0.32, 220, 32]} position={[1.6, 0.2, 0]}>
        <MeshDistortMaterial color="#d4a93a" roughness={0.15} metalness={0.85} distort={0.32} speed={1.6} />
      </TorusKnot>
    </Float>
  );
};

const FloatingIco = () => (
  <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.8}>
    <Icosahedron args={[0.85, 0]} position={[-2, -0.4, -1]}>
      <MeshDistortMaterial color="#1d3a8a" roughness={0.2} metalness={0.7} distort={0.45} speed={2} />
    </Icosahedron>
  </Float>
);

const SmallSphere = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <mesh position={[-0.5, 1.6, -0.5]}>
      <sphereGeometry args={[0.35, 48, 48]} />
      <MeshDistortMaterial color="#e9c66b" roughness={0.1} metalness={0.9} distort={0.5} speed={2.5} />
    </mesh>
  </Float>
);

export const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 4, 5]} intensity={1.2} color="#ffd479" />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#3b6cf3" />
      <Suspense fallback={null}>
        <Stars radius={40} depth={30} count={1200} factor={3} fade speed={0.6} />
        <SpinningKnot />
        <FloatingIco />
        <SmallSphere />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default HeroScene;
