import "./styleslidergallery.css";

import Item from "./item.jsx"
import { useRef, useState } from "react";

function Slidergallery() {

  const galleryRef = useRef();
  const [slideNumber, setslideNumber] = useState(0);
  
  

  const SlideGallery=(direction) => {
    let distance = galleryRef.current.getBoundingClientRect().x-150
    
    if (direction=="left" && slideNumber>0) {
      setslideNumber(slideNumber-1);
      galleryRef.current.style.transform=`translateX(${250 + distance}px)`
    }else if (direction=="right" && slideNumber<4){
      setslideNumber(slideNumber+1)
      galleryRef.current.style.transform=`translateX(${-250 + distance}px)`

    }

  }
  return (
    <div className="container">
         
            <div className="slide leftarrow" onClick={() => SlideGallery("left")}> - </div>
        
            <div className="wrapper" ref={galleryRef} >
                <Item imgsrc="'https://duckduckgo.com/?q=anime%20images&iax=images&ia=images&iai=http://images6.fanpop.com/image/photos/39900000/IMG-4349-JPG-anime-39996183-1024-1434.jpg&atb=v379-1'"/>
                <Item imgsrc={"https://duckduckgo.com/?q=anime%20images&iax=images&ia=images&iai=https://wallpapercave.com/wp/wp6127535.jpg&atb=v379-1"}/>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        
            <div className=" slide rightarrow" onClick={() => SlideGallery("right")}> + </div>
        
    </div>
  )
}

export default Slidergallery