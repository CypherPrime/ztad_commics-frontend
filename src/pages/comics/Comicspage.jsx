import Navbar from '../../components/navbar/Navbar'
import ComicNavSection from "../../components/comicNavSection/ComicNavSection.jsx"
import ComicGallery from "../../components/comicGallery/ComicGallery.jsx"
import Footer from "../../components/footer/Footer.jsx"
import "./stylecomics.css"

function Comicspage() {
  return (
      <div className="comicspage">
          <Navbar />
      <ComicNavSection />
      <ComicGallery />
      <Footer />

    </div>
  )
}

export default Comicspage