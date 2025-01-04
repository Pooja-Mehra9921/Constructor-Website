import React from "react";
import "./style.css";
import Carousel from "../Carousel";
import CarouselImage1 from "../../images/constructor.jpg";
import CarouselImage2 from "../../images/loginimage.jpg";
import CarouselImage3 from "../../images/backgroundImage.png";
import { Box, Typography } from "@mui/material";



const images = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage3,
  ];


const handleSelectedAll =()=>{
    console.log("clicked-----");
}

const TwoDPlan =()=>{
    return(
        <>
        <Box className="container">
<Box className="content-container">

<Carousel images={images}/>
<Box className="option-container"> 
    <Typography onClick={handleSelectedAll} className="selectedtext">Selected All</Typography>
</Box>

</Box>
        </Box>
        This is a Two d plan component
        </>
    )
};

export default TwoDPlan;