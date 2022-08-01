import React from 'react';

import { Routes, Route, } from 'react-router-dom';

import { Main } from './pages/Main';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
