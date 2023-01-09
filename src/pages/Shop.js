import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import Color from '../componet/Color';
import Shoes from '../Models/Shoes';

const Shop = () => {
  const [color, setColor] = useState({
    mesh: '#000cb8',
    stripes: '#c2c2c2',
    soul: '#4d4d4d',
  });
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div className='card'>
        <div className='product_canvas'>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Shoes customColors={color} />
              <OrbitControls autoRotate />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
        <div className='colors'>
          <Color name='mesh' color={color} setColor={setColor} />
          <Color name='stripes' color={color} setColor={setColor} />
          <Color name='soul' color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
