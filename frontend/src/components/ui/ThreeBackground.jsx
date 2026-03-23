import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const SpinningCube = () => {
  const meshRef = useRef(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 50, pointerEvents: 'none' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <SpinningCube />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
