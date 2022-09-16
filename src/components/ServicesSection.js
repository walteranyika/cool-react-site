import React from "react";
import clock from "../img/clock.svg"
import diagram from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
import home2 from "../img/home2.png"
import styled from "styled-components"
import {About, Description, Hide, Image} from "../styles";


const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="Efficient"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diagram} alt="Diaphragm Icon"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="Money Icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="Home Image"/>
            </Image>
        </Services>
    );
};

//customize a global styled component
const Services = styled(About)`
  h2{
  padding-bottom: 5rem;
  }
  p{
   width: 70%;
   padding: 2rem 0 4rem 0;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  flex-basis: 20rem;
  .icon{
    display: flex;
    align-items: center;
    h3{
     margin-left: 1rem;
     background: white;
     color: black;
     padding: 1rem;
    }
  }
`

export default ServicesSection;