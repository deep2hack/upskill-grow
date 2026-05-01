import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const Particles = ({ count = 600 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#d4a93a" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
};

export const AmbientBackdrop = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
    <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 6], fov: 60 }} gl={{ alpha: true, antialias: true }}>
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
    </Canvas>
  </div>
);

export default AmbientBackdrop;
