import React from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";


const Shimmereffect=()=>{
    return(
        <>
    
            <div className="full-main">
                <div className="full">
                    <p>Looking for tasty foods near you!</p>
                </div>
                <img src="https://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif"/>   
            </div>

      <ShimmerSimpleGallery card imageHeight={300} caption />
    <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={370}
        thumbnailHeight={370}
      />
      <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={370}
        thumbnailHeight={370}
      />
            <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={370}
        thumbnailHeight={370}
      />

      
      </>

    )
}
export default Shimmereffect;