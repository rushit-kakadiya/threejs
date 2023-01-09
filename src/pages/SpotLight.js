import { Canvas } from '@react-three/fiber';
import React from 'react';
import Dragon from '../Models/Dragon';

const Spotlight = () => {
  return (
    <Canvas
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
    >
      <color attach='background' args={['#202020']} />
      <fog attach='fog' args={['#202020', 5, 20]} />
      <ambientLight intensity={0.015} />
      <Dragon />
    </Canvas>
  );
};

export default Spotlight;
