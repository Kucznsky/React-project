import './App.css';
import React, {useState} from 'react';
import logo from './logo.png'

function App() {
  return (
    <div>
      <HomeBar></HomeBar>
    </div>
  );
}

//=======================================================================================================
const HomeBar = () => {
  const [active, setActive] = useState("FirstPage")
  return (
    <div className="div1">
      <div className="div2">
        <img src={logo} alt="logo" />
        <ul className="mainBar">
          <li>
            <button onClick={() => setActive("FirstPage")}>FirstHome</button>
          </li>
          <hr />
          <li>
            <button onClick={() => setActive("SecondPage")}>Repertoire</button>
          </li>
          <hr />
          <li>
            <button onClick={() => setActive("ThirdPage")}>Screening rooms</button>
          </li>
          <hr />
          <li>
            <button onClick={() => setActive("FourthPage")}>Movies</button>
          </li>
        </ul>
        <div>
          {active === "FirstPage" && <HomePage></HomePage>}
          {active === "SecondPage" && <Repertoire></Repertoire>}
          {active === "ThirdPage" && <ScreeningRoomsList></ScreeningRoomsList>}
          {active === "FourthPage" && <MovieList></MovieList>}
        </div>
      </div>
    </div>
  );
}

const HomePage = () => {
  return(<h1>Here will be lists of today showings and and ongoing showings </h1>);
}

const Repertoire = () => {
  return(<h1>Here will be repertoire</h1>);
}

const MovieList = () => {
    return(  
    <section className='booklist'>
      {movie.map((movie) => {
        return (<Movie key={movie.id} {...movie}></Movie>);
      })}
    </section>
  );
}

const ScreeningRoomsList = () => {
  return(  
    <section className='booklist'>
      {room.map((room) => {
        return (<Room key={room.id} {...room}></Room>);
      })}
    </section>
  );;
}

const Movie = (props) => 
{
  const {title, time} = props;
  return (
    <article className='book'>
      <h1>{title}</h1>
      <h4>{time}</h4>
    </article>
  );
}

const Room = (props) => 
{
  const {number, space} = props;
  return (
    <article className='book'>
      <h1>{number}</h1>
      <h4>{space}</h4>
    </article>
  );
}
//=======================================================================================================
const movie = [

{
  id: 1,
  title: 'Diuna',
  time: '155min',
},
];

const room = [
{
  id: 1,
  number: 'room 1',
  space: '100 chairs',
},
{
  id: 2,
  number: 'room 2',
  space: '50 chairs',
},
];

//=======================================================================================================

export default App;
