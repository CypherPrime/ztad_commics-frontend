import React from "react";
import Home from "./pages/home/Homepage";

import './styleapp.css';
import Comicspage from "./pages/comics/Comicspage";
import GalleryPage from "./pages/gallery/GalleryPage.jsx";
import DonatePage from "./pages/donate/DonatePage";

function App(){
    return(
        
            <div className="App">
                <DonatePage  />

            </div>
    )
}

export default App;