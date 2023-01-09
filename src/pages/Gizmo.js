import {
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  OrbitControls,
  PivotControls,
  TransformControls,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import ShakeScreen from '../Models/ShakeScreen';

const Gizmo = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-10, 10, 10], fov: 20 }}
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[2.5, 5, 5]} intensity={1.5} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach='' args={[-5, 5, 5, -5, 1, 50]} />
      </directionalLight>

      <mesh scale={20} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>

      <axesHelper scale={2} position={[0, 0, 0]}></axesHelper>

      <GizmoHelper alignment='top-left' margin={[100, 100]}>
        <group scale={0.85}>
          <GizmoViewcube />
        </group>
        <group scale={1.75} position={[-30, -30, -30]}>
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor='white'
            axisHeadScale={0.525}
            hideNegativeAxes
          />
        </group>
      </GizmoHelper>

      <PivotControls
        rotation={[0, -Math.PI / 2, 0]}
        anchor={[1, -1, -1]}
        scale={75}
        depthTest={false}
        fixed
        lineWidth={2}
      >
        <mesh castShadow receiveShadow position={[5, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </PivotControls>

      <TransformControls mode='scale' position={[0, 0.25, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial />
        </mesh>
      </TransformControls>

      {/* <ShakeScreen /> */}
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default Gizmo;
