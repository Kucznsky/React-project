import {useParams} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Axios from "axios";

const MovieDetails = () => {
    const {id} = useParams();
    const[movie,setMovie] = useState([]);
    const[error,setErrror] = useState([{titleError:"", screeningTimeError: ""}])

  useEffect(() => {
    Axios.get(`https://localhost:5001/Film/${id}`)
      .then(res => setMovie(res.data));
  },[]);

   const validate = () => {
        let titleError="";
        let screeningTimeError="";

        if(!(movie.title.charAt(0) === movie.title.charAt(0).toUpperCase())) {
            titleError = "Title has to begin with the capital letter";
        }
        if(movie.title === "") {
            titleError = "You have to type a title of the movie";
        }
        if(isNaN(movie.screeningTime)) {
            screeningTimeError = "You have to type a number"
        }
        if(movie.screeningTime === "") {
            screeningTimeError = "You have to type a time of the movie"
        }

        if(titleError !== "" || screeningTimeError !== "") {
            setErrror({titleError, screeningTimeError});
            return false;
        }
        return true;
    };

  const EditMovie = () => {
        const isValid = validate();

        if(isValid) {
            //========================//
            console.log(this.state);
            Axios.put("https://localhost:5001/Films", [{title: movie, screeningTime: movie.screeningTime}])
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                })
            //========================//
        }
    };

  const handleChangeTitle = (event) => {
    setMovie(event.target.value);
  }

   const handleChangeTime = (event) => {
    setMovie(event.target.value);
  }

  return(
    <article className='booklist'>
      <section className='book2'>
        <p className='listFirstLine'>{movie.title}</p>
        <p className='listSmallerText'>{movie.screeningTime}min</p> 
        <img className='pic' name="PLACEHOLDER" src="https://preview.redd.it/wvzoz6ejs8v51.jpg?auto=webp&s=bbe9c737a52630a15573a0f461e316e757a26aa1" alt="placeholder"></img>
      </section>
      <section className='div1'>
        <fieldset>
          <legend>Add new movie to the list</legend>
          <ul>
              <li>
                  <label>Title</label>
              </li>
              <li>
                  <input 
                      type="text" 
                      name="title"
                      value={movie.title} 
                      onChange={handleChangeTitle}
                  />
                  <p className='error'>{error.titleError}</p>
              </li>
                <hr/>
              <li>
                  <label>Time (minutes)</label>
              </li>
              <li>
                  <input  
                      type="text" 
                      name="screeningTime"
                      value={movie.screeningTime} 
                      onChange={handleChangeTime}
                  />
                  <p className='error'>{error.screeningTimeError}</p>
              </li>
              <hr/>
              <br/>
              <li>
                  <button onClick={EditMovie}>Confirm</button>
              </li>
          </ul>
        </fieldset>
      </section>
    </article>
  );
}

export default MovieDetails;
