import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import  {motion} from "framer-motion";
import {PageAnimation} from "../animations";

const AboutUsPage =()=>{
   return<motion.div variants={PageAnimation} exit="exit" initial="hidden" animate="show">
           <AboutSection/>
           <ServicesSection/>
           <FaqSection/>
       </motion.div>;
}

export default AboutUsPage;