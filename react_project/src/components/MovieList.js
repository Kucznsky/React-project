import React from "react";

const MovieList = () => {
    return(  
    <section className='booklist'>
      {movie.map((movie) => {
        return (<Movie key={movie.id} {...movie}></Movie>);
      })}
    </section>
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