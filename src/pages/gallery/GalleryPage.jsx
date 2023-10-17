import "./stylegallerypage.scss"
import Navbar from '../../components/navbar/Navbar'
import GalleryNavSection from '../../components/galleryNavSection/GalleryNavSection.jsx'
import GalleryDisplay from '../../components/galleryDisplay/GalleryDisplay.jsx'

function GalleryPage() {
  return (
      <div className='gallerypage'>
          <Navbar />
          <GalleryNavSection />
          <GalleryDisplay />
    </div>
  )
}

export default GalleryPage