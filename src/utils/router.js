import { lazy } from 'react';

const CharControl = lazy(() => import('../pages/CharControl'));
const Gizmo = lazy(() => import('../pages/Gizmo'));
const Home = lazy(() => import('../pages/Home'));
const Layer = lazy(() => import('../pages/Layer'));
const R3f = lazy(() => import('../pages/R3f'));
const Shop = lazy(() => import('../pages/Shop'));
const Spotlight = lazy(() => import('../pages/SpotLight'));
const StagePage = lazy(() => import('../pages/Stage'));

export const router = [
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/layer', element: <Layer /> },
  { path: '/gizmo', element: <Gizmo /> },
  { path: '/stage', element: <StagePage /> },
  { path: '/r3f', element: <R3f /> },
  { path: '/spotlight', element: <Spotlight /> },
  { path: '/char-control', element: <CharControl /> },
];
