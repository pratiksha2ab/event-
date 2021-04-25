import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


function ImageSlider() {
    const imageSliderList=[
        {
            image:"eventbanner.png",
            alt:"nature"
        },
        {
          image:"https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g",
          alt:"himalay "
        },
        {
            image:"https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
            alt:"animal"
        }
    ]

    return (
        
        <div style ={{height:"400px"}}>
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
                       <img height="450px" src ={item.image} alt={item.alt}/>
                   </div>

                   )
               }
               </Carousel> 
        </div>
    )
}

export default ImageSlider
