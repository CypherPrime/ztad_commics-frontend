import CaroselData from "./CaroselData.js"

function CaroselItem(props) {
  return (
     
        <div className='coroselimg'>
          <img src= {props.imgsrc} alt="" />
        </div>

    
  )
}

export default CaroselItem