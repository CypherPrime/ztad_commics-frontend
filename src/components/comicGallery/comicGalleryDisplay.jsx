import "./stylecomicGalleryDisplay.scss"
import ComicGalleryItem from '../../components/ComicGalleryItem/ComicGalleryItem.jsx'

function comicGalleryDisplay() {
  return (
      <div className="gallery-container">
          <ComicGalleryItem />
          <ComicGalleryItem />
          <ComicGalleryItem />
          
        
    </div>
  )
}

export default comicGalleryDisplay