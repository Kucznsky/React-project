import React from "react";
import {Link} from 'react-router-dom';

const MovieList = () => {
    return(
      <article>
        <section className='center'>
          <Link className='btn' to='/movies/add_movie'>Add movie</Link>
          <Link className='btn' to='/movies/edit_movie'>Edit movie</Link>
        </section>
        <section className='booklist'>
          {movie.map((movie) => {
            return (<Movie key={movie.id} {...movie}></Movie>);
          })}
        </section>
      </article>
  );
}

const Movie = (props) => 
{
  const {title, time} = props;
  return (
    <article className='book'>
      <p className='listFirstLine'>{title}</p>
      <p className='listSmallerText'>{time}</p>
    </article>
  );
}

//======================================================================
const movie = [
{
  id: 1,
  title: 'Diuna',
  time: '155min',
},
];
//======================================================================

export default MovieList;