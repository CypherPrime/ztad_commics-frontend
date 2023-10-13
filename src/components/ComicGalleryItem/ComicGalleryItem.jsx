import { FavoriteBorder } from '@mui/icons-material'
import "./stylecomicGalleryItem.scss"

function ComicGalleryItem() {
    return (
        <div className="galleryItem">
            <div className="feavorIcon">
              <span> <FavoriteBorder /> </span> 
            </div>
            <div className="comicinfo">
                <div className="comicImg">
                </div>
                <div className="comicTitle">
                        <span>Katongo - Robe</span>
                </div>
                
                <div className="episodenum">
                        <span>Episode 1</span>
                </div>
                <div className="episodetile">
                    <span>reawarking of a new life</span>
                </div>
            </div>
        </div>
    )
}

export default ComicGalleryItem