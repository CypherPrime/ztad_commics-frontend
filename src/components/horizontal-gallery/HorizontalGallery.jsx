import "./stylehorizontalgallery.css"
import GalleryHeader from "../GalleryHeader/GalleryHeader"
import HorizonGalleryDiplay from "./HorizonGalleryDiplay.jsx"


function HorizontalGallery() {
    return (
      
    <div className="horizontalgallery-sec">
        <GalleryHeader title="Arts and Posters" descrip="Some of our Digital character arts and Poster Designs. Enjoy!" />

        <HorizonGalleryDiplay />
        
    </div>
  )
}

export default HorizontalGallery