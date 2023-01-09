import {
  CatmullRomLine,
  Circle,
  Cone,
  CubicBezierLine,
  Cylinder,
  Dodecahedron,
  Extrude,
  Icosahedron,
  Lathe,
  Line,
  Octahedron,
  Plane,
  Polyhedron,
  QuadraticBezierLine,
  Ring,
  RoundedBox,
  ScreenQuad,
  Sphere,
  Tetrahedron,
  Torus,
  TorusKnot,
  Tube,
} from '@react-three/drei';

export const firstCapitalized = (str) => str[0]?.toUpperCase() + str.substring(1);

export const shapeNames = [
  {
    name: 'Plane',
    component: (
      <Plane>
        <meshBasicMaterial color='red' wireframe />
      </Plane>
    ),
  },
  {
    name: 'Box',
    component: (
      <RoundedBox>
        <meshBasicMaterial color='red' wireframe />
      </RoundedBox>
    ),
  },
  {
    name: 'Sphere',
    component: (
      <Sphere>
        <meshBasicMaterial color='red' wireframe />
      </Sphere>
    ),
  },
  {
    name: 'Circle',
    component: (
      <Circle>
        <meshBasicMaterial color='red' wireframe />
      </Circle>
    ),
  },
  {
    name: 'Cone',
    component: (
      <Cone>
        <meshBasicMaterial color='red' wireframe />
      </Cone>
    ),
  },
  {
    name: 'Cylinder',
    component: (
      <Cylinder>
        <meshBasicMaterial color='red' wireframe />
      </Cylinder>
    ),
  },
  {
    name: 'Tube',
    component: (
      <Tube>
        <meshBasicMaterial color='red' wireframe />
      </Tube>
    ),
  },
  {
    name: 'Torus',
    component: (
      <Torus>
        <meshBasicMaterial color='red' wireframe />
      </Torus>
    ),
  },
  {
    name: 'TorusKnot',
    component: (
      <TorusKnot>
        <meshBasicMaterial color='red' wireframe />
      </TorusKnot>
    ),
  },
  {
    name: 'Ring',
    component: (
      <Ring>
        <meshBasicMaterial color='red' wireframe />
      </Ring>
    ),
  },
  {
    name: 'Tetrahedron',
    component: (
      <Tetrahedron>
        <meshBasicMaterial color='red' wireframe />
      </Tetrahedron>
    ),
  },
  {
    name: 'Polyhedron',
    component: (
      <Polyhedron
        args={[
          [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1],
          [2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4],
          1,
          2,
        ]}
      >
        <meshBasicMaterial color='red' wireframe />
      </Polyhedron>
    ),
  },
  {
    name: 'Icosahedron',
    component: (
      <Icosahedron>
        <meshBasicMaterial color='red' wireframe />
      </Icosahedron>
    ),
  },
  {
    name: 'Octahedron',
    component: (
      <Octahedron>
        <meshBasicMaterial color='red' wireframe />
      </Octahedron>
    ),
  },
  {
    name: 'Dodecahedron',
    component: (
      <Dodecahedron>
        <meshBasicMaterial color='red' wireframe />
      </Dodecahedron>
    ),
  },
  {
    name: 'Extrude',
    component: (
      <Extrude>
        <meshBasicMaterial color='red' wireframe />
      </Extrude>
    ),
  },
  {
    name: 'Lathe',
    component: (
      <Lathe>
        <meshBasicMaterial color='red' wireframe />
      </Lathe>
    ),
  },
  {
    name: 'RoundedBox',
    component: (
      <RoundedBox>
        <meshBasicMaterial color='red' wireframe />
      </RoundedBox>
    ),
  },
  {
    name: 'ScreenQuad',
    component: (
      <ScreenQuad>
        <meshBasicMaterial color='red' wireframe />
      </ScreenQuad>
    ),
  },
  {
    name: 'Line',
    component: (
      <Line
        points={[
          [-2, 0, 0],
          [0, 2, 0],
          [2, 0, 0],
        ]}
        color='red'
      />
    ),
  },
  {
    name: 'QuadraticBezierLine',
    component: <QuadraticBezierLine start={[-2, 0, 0]} end={[0, 2, 0]} mid={[0, 0, 2]} color='red' />,
  },
  {
    name: 'CubicBezierLine',
    component: <CubicBezierLine start={[-2, 0, 0]} end={[0, 2, 0]} midA={[0, 5, 0]} midB={[0, 0, 5]} color='red' />,
  },
  {
    name: 'CatmullRomLine',
    component: (
      <CatmullRomLine
        points={[
          [-2, 0, 0],
          [0, 2, 0],
          [2, 0, 2],
        ]}
        curveType='catmullrom'
        color='red'
      />
    ),
  },
];
