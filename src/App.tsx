import React from 'react';

import './App.css';

import Popular from "./pages/Popular";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import TopRated from "./pages/TopRated";

function App() {
  return (
    <div>
     <Header/>
        <Routes>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/topRated" element={<TopRated/>}/>
        </Routes>
    </div>
  );
}

export default App;
