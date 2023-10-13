import "./stylecomicGallery.scss";

import ComicGalleryDisplay from "./comicGalleryDisplay.jsx"

import comicSeriesData from "./comicSeriesData.js"

function ComicGallery() {
  return (
      <div className="ComicGallery-sect">
          <div className="series-sec">
              
                <div className="seriesTitle">
                    <div className="comicName">
                        <span> Katongo - Robe</span>
                    </div>
                    
                    <div className="comicCreator">
                        Azenwie & Azeh
                    </div>
                </div>
                <div className="comicgallery">
                    < ComicGalleryDisplay />
                </div>


          </div>
          <div className="series-sec">
              
                <div className="seriesTitle">
                    <div className="comicName">
                        <span> One Piece </span>
                    </div>
                    
                    <div className="comicCreator">
                        Azenwie & Azeh
                    </div>
                </div>
                <div className="comicgallery">
                    < ComicGalleryDisplay />
                </div>


          </div>
          
    </div>
  )
}

export default ComicGallery