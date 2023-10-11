import "./stylegallerycard.css";



function GalleryCard(props) {
  return (
    <div className="gallery-card">
        <div className="gallery-img">
              <img src={props.imgsrc} alt="" />
        
        </div>

        <div className="imageTitle">
            <span>{props.title}</span>
        </div>

        <div className="imageDescrip">
            <span>{props.descrip}</span>
        </div>

    </div>
  )
}

export default GalleryCard