import React from 'react';
import './App.scss';
import Popular from "./pages/Popular";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import TopRated from "./pages/TopRated";
import Details from "./pages/DetailPage";
import InfoPage from "./pages/ActorPage";
import ActorMovie from "./pages/ActorMovie";
import Search from "./components/Search";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
       <Header/>
        <Routes>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/topRated" element={<TopRated/>}/>
            <Route path="/detail/:id" element={<Details/>}/>
            <Route path="/actors/:id" element={<InfoPage/>}/>
            <Route path="/actorsMovie/:id" element={<ActorMovie/>}/>
            <Route path="/search/:movieName" element={<Search/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
