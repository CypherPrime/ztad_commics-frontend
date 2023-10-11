import "./stylehorizontalgallery.css"
import GalleryHeader from "../GalleryHeader/GalleryHeader"
import Slidergallery from "../Slidergallery/Slidergallery.jsx" 

function HorizontalGallery() {
  return (
    <div className="horizontalgallery-sec">
        <GalleryHeader title="Arts and Posters" descrip="Some of our Digital character arts and Poster Designs. Enjoy!" />
        
        <Slidergallery />

        
    </div>
  )
}

export default HorizontalGallery