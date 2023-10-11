import Navbar from "../../components/navbar/Navbar";
import Carosel from "../../components/carosel/Carosel";
import Gallery from "../../components/gallery/Gallery";
import HorizontalGallery from "../../components/horizontal-gallery/HorizontalGallery.jsx";
import Footer from "../../components/footer/Footer.jsx";

import './stylehome.css';



function Home() {
  return (
    <div className="home">
        <Navbar />
        <Carosel />
        <Gallery />
        <HorizontalGallery />
        <Footer />
    </div>
  )
}

export default Home;