import React from "react";
import styled from "styled-components";
import {About} from "../styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from "framer-motion";

const FaqSection = () => {

    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title={"How do I start?"}>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, repellat!</p>
                </div>
            </Toggle>

            <Toggle title={"Daily Schedule"}>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, repellat!</p>
                </div>
            </Toggle>
            <Toggle title={"How much does it cost"}>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, repellat!</p>
                </div>
            </Toggle>
            <Toggle title={"What products do you offer"}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, repellat!</p>
                    </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
   display: block;
   span{
     display: block;
   }
   h2{
     padding-bottom: 2rem;
     font-weight: lighter;
   }
   .faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
   }
   .question{
      padding: 3rem 0;
      cursor:pointer;
   }
   .answer{
      padding: 2rem 0;
      p{
      padding: 1rem 0;
      }
   }
`
export default FaqSection;