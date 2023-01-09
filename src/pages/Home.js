import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { shapeNames } from '../utils';
import Shapes from '../Models/Shapes';
import Loader from '../Layout/Loader';
import { Environment, OrbitControls } from '@react-three/drei';

const Home = () => {
  const [shape, setShape] = useState(shapeNames[0]?.name);
  return (
    <div className='container'>
      <h3 className='py-4 text-center'> Shapes </h3>
      <div className='row'>
        <div className='col-xl-3'>
          <select className='form-select' value={shape} onChange={(e) => setShape(e.target.value)}>
            {shapeNames.map(({ name }) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className='col-xl-9' style={{ display: 'grid', placeItems: 'center' }}>
          <div className='card'>
            <div className='product_canvas'>
              <Canvas>
                <Suspense fallback={<Loader />}>
                  <Shapes name={shape} />
                  <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
                  <Environment preset='dawn' background />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
