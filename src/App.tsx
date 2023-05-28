import React from 'react';

import './App.scss';

import Popular from "./pages/Popular";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import TopRated from "./pages/TopRated";
import Details from "./pages/DetailPage";
import InfoPage from "./pages/ActorPage";





function App() {
  return (
    <div>
       <Header/>
        <Routes>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/topRated" element={<TopRated/>}/>
            <Route path="/detail/:id" element={<Details/>}/>
            <Route path="/actors/:id" element={<InfoPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
