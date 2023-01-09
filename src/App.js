import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { router } from './utils/router';
const Header = lazy(() => import('./Layout/Header'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {router.map(({ path, element }) => (
          <Route
            path={path}
            element={
              <Suspense
                fallback={
                  <h3
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      minHeight: '100vh',
                    }}
                  >
                    Loading...
                  </h3>
                }
              >
                {element}
              </Suspense>
            }
            key={path}
          />
        ))}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
