import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


function ImageSlider() {
    const imageSliderList=[
        {
            image:"mainbanner-min.png",
            alt:"nature"
        }
        
    ]

    return (
        
        <div style ={{height:"550px",marginBottom:"50px"}}>
           <Carousel
           showThumbs={false}
           showStatus={false}
           autoPlay={true}
           infiniteLoop={true}
           interval={2000}
           showArrows={false}
           swipeable={true}
           >
               {
                   imageSliderList.map((item ,index)=>
                   <div>
                       <img height="550px" src ={item.image} alt={item.alt}/>
                   </div>

                   )
               }
               </Carousel> 
        </div>
    )
}

export default ImageSlider
