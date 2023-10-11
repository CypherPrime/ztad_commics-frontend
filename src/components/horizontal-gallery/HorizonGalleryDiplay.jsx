import HorizonGalleryItem from "./HorizonGalleryItem"
import { HorizonGalleryData } from "./HorizonGalleryData"
import "./stylehorizongallerydisplay.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function HorizonGalleryDiplay() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

        const HorizonDisplay = HorizonGalleryData.map(item => (
        <HorizonGalleryItem imgsrc={item.imgurl}/>
))
    return (
      <div className="displaysec">
         <Carousel
            swipeable={true}
            responsive={responsive}
            customTransition="all ease 3000ms"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}

            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
        >
            {HorizonDisplay}
            
            
        </Carousel >
    </div>
  )
}

export default HorizonGalleryDiplay