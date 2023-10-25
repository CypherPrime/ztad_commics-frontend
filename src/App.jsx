import React from "react";
import Home from "./pages/home/Homepage";

import './styleapp.css';
import Comicspage from "./pages/comics/Comicspage";
import GalleryPage from "./pages/gallery/GalleryPage.jsx";
import DonatePage from "./pages/donate/DonatePage";
import ComicReadPage from "./pages/reader_page/ComicReadPage.jsx"
import Loginpage from "./pages/login/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

function App(){
    return(
        
        <BrowserRouter className="App">
            <Routes>
                <Route path="/" >
                    <Route index element={<Home />} />
                    <Route path="Comics" element={<Comicspage />} />
                    <Route path="Gallery" element={<GalleryPage />} />
                    <Route path="Donate" element={<DonatePage />} />
                    <Route path="Read Comic" element={<ComicReadPage />} />
                    <Route path="Login" element={<Loginpage />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;