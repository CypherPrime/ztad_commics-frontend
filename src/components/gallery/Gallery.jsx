import GalleryCard from "../GalleryCard/GalleryCard"
import GalleryHeader from "../GalleryHeader/GalleryHeader"
import { NewReleasesData } from "./NewReleasesData.js"

import './stylegallery.css'

function Gallery() {
  const galleryDisplay = NewReleasesData.map(item => (
    <GalleryCard imgsrc={item.imgsrc} title={item.title} descrip={item.descr} />
  
  ))
  return (
    <div className="gallery-section">
        <GalleryHeader title="New Releases" descrip="See the latest anime releases this week" />
        <div className="gallery">
            {galleryDisplay}
            
        </div>

    </div>
  )
}

export default Gallery