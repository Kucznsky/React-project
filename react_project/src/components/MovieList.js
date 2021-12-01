import React from "react";
import {Link} from 'react-router-dom';

const MovieList = () => {
    return(
      <article>
        <section className='center'>
          <Link className='btn' to='/movies/add_movie'>Add movie</Link>
          <Link className='btn' to='/movies/edit_movie'>Edit movie</Link>
          <Link className='btn' to='/movies/movie_popularuty'>Movie popularity</Link>
        </section>
        <section className='booklist'>
          {movie.map((movie) => (
            <article className='book' key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <p className='listFirstLine'>{movie.title}</p>
            <p className='listSmallerText'>{movie.time}</p> 
            </Link>
          </article>           
          ))}
        </section>
      </article>
  );
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
  time: '155min',
},
{
  id: 2,
  title: 'DOM GUCCI',
  time: '158min',
},
];
//======================================================================

export default MovieList;