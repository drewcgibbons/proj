import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Root from './pages/Root/Root'
import Home from './pages/Home/Home'

const App : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/> }/>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
