import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = (props) => {
    //const {title,time}=props;
    return(
      <article>
        <section className='center'>
          <Link className='btn' to='/add_movie'>Add movie</Link>
          <Link className='btn' to='/edit_movie'>Edit movie</Link>
          <Link className='btn' to='/movie_popularity'>Movies popularity</Link>
        </section>
        <section className='booklist'>
          {movie.map((movie) => (
            <article className='book' key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <p className='listFirstLine'>{movie.title}</p>
                <p className='listSmallerText'>{movie.time}min</p> 
              </Link>
            </article>           
          ))}
        </section>
      </article>
  );
}

MovieList.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number,
}

/*const Movie = (props) => 
{
  const {title, time} = props;
  return (
    <article className='book'>
      <Link to={`/movies/${movie.id}`}>
        <p className='listFirstLine'>{title}</p>
        <p className='listSmallerText'>{time}</p> 
      </Link>
    </article>
  );
}*/

//======================================================================
const movie = [
{
  id: 1,
  title: 'Diuna',
  time: 155,
},
{
  id: 2,
  title: 'DOM GUCCI',
  time: 158,
},
];
//======================================================================

export default MovieList;