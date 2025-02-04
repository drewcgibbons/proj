import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button.tsx'
import Text from './components/Text/Text.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Root from './pages/Root.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
