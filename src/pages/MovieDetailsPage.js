import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import {MovieState} from "../movieState";

import  {motion} from "framer-motion";
import {PageAnimation} from "../animations";

const MovieDetailsPage = () => {
    const location = useLocation()
    const url = location.pathname;
    const [movies] = useState(MovieState)
    const [movie, setMovie] = useState(null)

    useEffect(()=>{
        movies.filter(movie=>{
            if (movie.url===url){
                return setMovie(movie);
            }
        });
    },[movies, url]);
    console.log(location.pathname)

    return ((movie && <DetailStyle variants={PageAnimation} exit="exit" initial="hidden" animate="show">
               <HeadLine>
                   <h2>{movie.title}</h2>
                   <img src={movie.mainImg} alt="Main image"/>
               </HeadLine>
              <Awards>
                  {movie.awards.map(award =>(
                      <Award title={award.title} description={award.description}/>
                  ))}
              </Awards>
              <ImageDisplay>
                  <img src={movie.secondaryImg} alt=""/>
              </ImageDisplay>
           </DetailStyle>));
}

const DetailStyle = styled(motion.div)`
  color: white;
`
const HeadLine = styled.div`
 min-height: 90vh;
 padding-top: 20rem;
 position: relative;
 h2{
   position: absolute;
   top: 10%;
   left: 50%;
   transform: translate(-50%, -10%);
 }
 img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
 }
`

const Awards = styled.div`
   min-height: 80vh;
   display: flex;
   margin: 5rem 10rem;
   align-items: center;
   justify-content: space-around;
`

const AwardStyle = styled.div`
  padding: 5rem;
  h3{
    font-size: 1.5rem;
  }
  .line{
   width: 100%;
   background: #23d997;
   height: 0.5rem;
   margin: 1rem 0rem;
  }
  p{
   padding: 2rem 0;
  }
`

const ImageDisplay = styled.div`
  min-height: 50vh;
  img{
     width: 100%;
     height: 100vh;
     object-fit: cover;
  }
`

const Award = ({title, description})=>{
    return(<AwardStyle>
        <h3>{title}</h3>
         <div className="line"></div>
         <p>{description}</p>
    </AwardStyle>);
}
export default MovieDetailsPage;