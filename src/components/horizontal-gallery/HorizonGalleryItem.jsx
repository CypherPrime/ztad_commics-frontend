import "./styleitem.css";

function HorizonGalleryItem(props) {
  return (
    <div className="item">
        <img src={props.imgsrc} alt="" />
    </div>
  )
}

export default HorizonGalleryItem