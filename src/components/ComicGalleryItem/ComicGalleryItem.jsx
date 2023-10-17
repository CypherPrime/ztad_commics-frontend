import { FavoriteBorder } from '@mui/icons-material'
import "./stylecomicGalleryItem.scss"

function ComicGalleryItem(props) {
    return (
        <div className="galleryItem">
            <div className="feavorIcon">
              <span> <FavoriteBorder /> </span> 
            </div>
            <div className="comicinfo">
                <div className="comicImg">
                    <img src={ props.imgsrc } alt="" />
                </div>
                <div className="comicTitle">
                        <span>{props.comictitle}</span>
                </div>
                
                <div className="episodenum">
                    <span>{ props.epnum}</span>
                </div>
                <div className="episodetile">
                    <span>{props.eptitle}</span>
                </div>
            </div>
        </div>
    )
}

export default ComicGalleryItem