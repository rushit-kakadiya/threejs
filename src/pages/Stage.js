import {
  Environment,
  FlyControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stage,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import TargetStand from '../Models/TargetStand';
import Loader from '../Layout/Loader';

const StagePage = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [1, 0, 1], fov: 50 }}
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
    >
      <Suspense fallback={<Loader />}>
        <Stage
          intensity={0.5}
          preset='upfront'
          shadows={{ type: 'accumulative', color: 'grey', colorBlend: 2, opacity: 2 }}
          adjustCamera={1.75}
          environment='warehouse'
        >
          <TargetStand />
        </Stage>
      </Suspense>

      <OrbitControls makeDefault autoRotate />
      {/* <OrthographicCamera
        makeDefault
        // top={200}
        // bottom={-200}
        // left={200}
        // right={-200}
        // near={1000}
        // far={2000}
        // position={[0, 0, 200]}
      /> */}

      {/* <PerspectiveCamera makeDefault /> */}

      {/* <FlyControls autoForward={true} dragToLook={true} /> */}

      <Environment preset='warehouse' background />
    </Canvas>
  );
};

export default StagePage;
