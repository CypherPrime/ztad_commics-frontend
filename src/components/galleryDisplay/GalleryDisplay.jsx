import React from 'react'
import GalleryHeader from '../GalleryHeader/GalleryHeader'
import ComicGalleryItem from '../ComicGalleryItem/ComicGalleryItem'

function GalleryDisplay() {

  return (
    <div className="gallerydisplay-sec">
          <GalleryHeader title="Just imagine!" />
          <div className="gallery">
              
              <ComicGalleryItem />

          </div>
    </div>
  )
}

export default GalleryDisplay