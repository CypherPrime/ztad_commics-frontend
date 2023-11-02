import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CaroselItem from "./CaroselItem.jsx"

import './stylecarosel.css'
import { CaroselData } from './CaroselData.js';

function Carosel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };



  const CaroselDisplay = CaroselData.map(item => (
    <CaroselItem imgsrc={item.imgurl}/>
  ))
  return (
    <div className='carosel-sec'>
        
      <Carousel
        swipeable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all ease 3000ms"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}

        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {CaroselDisplay}
        
        
      </Carousel >;
    </div>
  )
}

export default Carosel;