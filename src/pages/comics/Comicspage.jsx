import Navbar from '../../components/navbar/Navbar'
import ComicNavSection from "../../components/comicNavSection/ComicNavSection.jsx"
import ComicGallery from "../../components/comicGallery/ComicGallery.jsx"
import Footer from "../../components/footer/Footer.jsx"

function Comicspage() {
  return (
      <div className="home">
          <Navbar />
      <ComicNavSection />
      <ComicGallery />
      <Footer />

    </div>
  )
}

export default Comicspage