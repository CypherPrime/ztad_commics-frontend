import "./stylecomicGalleryDisplay.scss"
import ComicGalleryItem from '../../components/ComicGalleryItem/ComicGalleryItem.jsx'
import { Link, Outlet } from "react-router-dom"

function comicGalleryDisplay() {
  return (
    <div className="gallery-container">
      <Link to="/Read Comic">
          <ComicGalleryItem comictitle="Rise of the titans" />
      
      </Link>
          <ComicGalleryItem />
          <ComicGalleryItem />
          
        <Outlet/>
    </div>
  )
}

export default comicGalleryDisplay