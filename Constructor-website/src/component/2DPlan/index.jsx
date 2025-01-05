import React from "react";
import "./style.css";
import Carousel from "../Carousel";
import CarouselImage1 from "../../images/constructor.jpg";
import CarouselImage2 from "../../images/loginimage.jpg";
import CarouselImage3 from "../../images/backgroundImage.png";
import { Box, Typography } from "@mui/material";
import UserManagement from "../UserManagement";



const images = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage3,
  ];



const TwoDPlan =()=>{
    return(
        <>
  

<Carousel images={images}/>


        <UserManagement/>
        </>
    )
};

export default TwoDPlan;