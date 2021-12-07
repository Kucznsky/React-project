import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from "axios";

const MovieList = () => {
  const[movie,setMovie] = useState([]);

  useEffect(() => {
    Axios.get("https://localhost:5001/Films")
      .then(res => setMovie(res.data));
  },[]);

  return(
    <article>
      <section className='center'>
        <Link className='btn' to='/add_movie'>Add movie</Link>
        <Link className='btn' to='/edit_movie'>Edit movie</Link>
        <Link className='btn' to='/movie_popularity'>Movies popularity</Link>
      </section>
      <section className='booklist'>
        {movie.map((movie) => {
          return(<Movie key={movie.id} {...movie}></Movie>);
        })}
      </section>
    </article>
  );
}

const Movie = (props) => 
{
  const {id, title, screeningTime} = props;
  return (
    <article className='book'>
      <Link to={`/movies/${id}`}>
        <p className='listFirstLine'>{title}</p>
        <p className='listSmallerText'>{screeningTime}min</p> 
      </Link>
    </article>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  screeningTime: PropTypes.number,
}

export default MovieList;