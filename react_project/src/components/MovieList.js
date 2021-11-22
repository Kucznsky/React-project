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
    <button className='book'>
      <h1>{title}</h1>
      <h4>{time}</h4>
    </button>
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