import Navbar from '../../components/navbar/Navbar'
import ComicNavSection from "../../components/comicNavSection/ComicNavSection.jsx"
import ComicGallery from "../../components/comicGallery/ComicGallery.jsx"

function Comicspage() {
  return (
      <div className="home">
          <Navbar />
      <ComicNavSection />
      <ComicGallery />

    </div>
  )
}

export default Comicspage