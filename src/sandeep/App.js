import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";
import Test from './test'

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={ <Test/> } />
    </Routes>
    </>
  );
}

export default App;