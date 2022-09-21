import React from "react";
import  {motion} from "framer-motion";
import {PageAnimation} from "../animations";

const ContactUsPage =()=>{
    return (<motion.div variants={PageAnimation} exit="exit" initial="hidden" animate="show" style={{background:'#fff'}}>
      <h1>Contact Us</h1>
    </motion.div>)
}


export default ContactUsPage;