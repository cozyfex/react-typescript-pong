import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import Pong from './pages/pong/pong';
import SagaTest from './pages/saga-test';

const App = () => {
  return (
    <Routes>
      <Route path={''} element={<Index/>}/>
      <Route path={'pong'} element={<Pong/>}/>
      <Route path={'saga-test'} element={<SagaTest/>}/>
    </Routes>
  );
};

export default App;
