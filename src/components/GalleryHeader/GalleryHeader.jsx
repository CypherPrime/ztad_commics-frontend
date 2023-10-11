import "./stylegalleryheader.css";

function GalleryHeader(props) {
  return (
    <>
        <div className="galleryName">        
            <span className="name">{props.title}</span>        
            <span className="descrip">{props.descrip}</span>  
        </div>
    </>
  )
}

export default GalleryHeader