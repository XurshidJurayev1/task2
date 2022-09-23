import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../pages/Form';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="*" element={<Form />} />
    </Routes>
  );
};

export default Index;