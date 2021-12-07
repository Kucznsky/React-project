import {useParams} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Axios from "axios";

const MovieDetails = () => {
    const {id} = useParams();
    const[movie,setMovie] = useState([]);

  useEffect(() => {
    Axios.get(`https://localhost:5001/Film/${id}`)
      .then(res => setMovie(res.data));
  },[]);

  return(
    <article>
      <p className='listFirstLine'>{movie.title}</p>
      <p className='listSmallerText'>{movie.screeningTime}min</p> 
      <img className='pic' name="PLACEHOLDER" src="https://preview.redd.it/wvzoz6ejs8v51.jpg?auto=webp&s=bbe9c737a52630a15573a0f461e316e757a26aa1" alt="placeholder"></img>
    </article>
  );
}

export default MovieDetails;
