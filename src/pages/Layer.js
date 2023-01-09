import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DebugLayerMaterial, Depth, Color, Fresnel, Noise, Normal } from 'lamina';

export default function Layer() {
  const props = { base: '#ff4eb8', colorA: '#00ffff', colorB: '#ff00e3' };
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [2, 0, 0], fov: 80 }}
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
    >
      <Suspense fallback={null}>
        <Bg {...props} />
        <Flower {...props} />
        <mesh>
          <sphereGeometry args={[0.2, 64, 64]} />
          <meshPhysicalMaterial transmission={1} thickness={10} roughness={0.2} />
        </mesh>
        <OrbitControls />
        <directionalLight intensity={2} castShadow shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
        <ambientLight intensity={0.4} />
      </Suspense>
    </Canvas>
  );
}

function Bg() {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += delta;
  });
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <DebugLayerMaterial color='#f0aed2' name='Background' attach='material' side={THREE.BackSide}>
        <Depth colorA='blue' colorB='#00aaff' alpha={0.5} mode='multiply' near={0} far={300} origin={[10, 10, 10]} />
        <Depth
          colorA='#ff0000'
          colorB='#00aaff'
          alpha={0.5}
          mode='multiply'
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </DebugLayerMaterial>
    </mesh>
  );
}

function Flower({ base, colorA, colorB }) {
  const mesh = useRef();
  const depth = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.z += delta / 2;
    depth.current.origin.set(-state.mouse.y, state.mouse.x, 0);
  });
  return (
    <mesh castShadow receiveShadow rotation-y={Math.PI / 2} scale={[2, 2, 2]} ref={mesh}>
      <torusKnotGeometry args={[0.4, 0.05, 400, 8, 3, 7]} />
      <DebugLayerMaterial color='#ff4eb8' name='flower'>
        <Color color={'#ff4eb8'} />
        <Depth
          far={3}
          origin={[1, 1, 1]}
          colorA='#ff00e3'
          colorB='#00ffff'
          alpha={0.5}
          mode={'multiply'}
          mapping='camera'
        />
        <Depth ref={depth} near={0.25} far={2} colorA={'#ffe100'} alpha={0.5} mode={'lighten'} mapping={'vector'} />
        <Fresnel mode={'softlight'} />
      </DebugLayerMaterial>
    </mesh>
  );
}
