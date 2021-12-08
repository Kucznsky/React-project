import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faEdit, faChartBar} from '@fortawesome/free-solid-svg-icons'

const MovieList = () => {
  const[movie,setMovie] = useState([]);

  useEffect(() => {
    Axios.get("https://localhost:5001/Films")
      .then(res => setMovie(res.data));
  },[]);

  return(
    <article>
      <section className='center'>
        <Link className='links' to='/add_movie'>Add movie <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Link>
        <Link className='links' to='/edit_movie'>Edit movie <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
        <Link className='links' to='/movie_popularity'>Movies popularity <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></Link>
      </section>
      <div className='center'>
        <section className='booklist'>
          {movie.map((movie) => {
            return(<Movie key={movie.id} {...movie}></Movie>);
          })}
        </section>
      </div>
    </article>
  );
}

const Movie = (props) => 
{
  const {id, title, screeningTime} = props;
  return (
    <div className='book'>
      <Link to={`/movies/${id}`}>
        <p className='listFirstLine'>{title}</p>
        <p className='listSmallerText'>{screeningTime}min</p> 
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  screeningTime: PropTypes.number,
}

export default MovieList;