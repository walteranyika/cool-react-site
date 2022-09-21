import React from "react";
import home1 from"../img/home1.png";
import {About, Description, Hide, Image} from "../styles";
// import styled from "styled-components";
import {motion} from "framer-motion";
import {titleAnim, fade, photoAnimation} from "../animations";
import Wave from "./Wave";

const AboutSection=()=>{
/*  const titleAnim ={
       hidden: {opacity: 0},
       show: {opacity: 1, transition:{duration: 2}},
  };

  const container ={
      hidden: {x:100},
      show: {x:0, transition: {duration: 0.75, ease:"easeOut", staggerChildren:1, when:'afterChildren'}},
  }*/
  return(<About>
      <Description>
          <motion.div className="title">
              <Hide>
                  <motion.h2 variants={titleAnim}>We work to make</motion.h2>
              </Hide>
              <Hide>
                  <motion.h2 variants={titleAnim}>Your <span>Dreams</span> come</motion.h2>
              </Hide>
              <Hide>
                  <motion.h2 variants={titleAnim}>true.</motion.h2>
              </Hide>
          </motion.div>
          <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
          <motion.img variants={photoAnimation} src={home1} alt=""/>
      </Image>
      <Wave/>
  </About>);
}

export default AboutSection;