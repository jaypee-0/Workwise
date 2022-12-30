import React from 'react';
import Navbar from './components/Navbar/Navbar';
//import Footer from './components/Footer/Footer';
import Home from './routes/Home';
import Error from './routes/Error';
import "./components/Fontawesome";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
