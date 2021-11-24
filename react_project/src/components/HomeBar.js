import React, {useState} from 'react';
import HomePage from './HomePage';
import Repertoire from './Repertoire';
import MovieList from './MovieList';
import ScreeningRoomsList from './ScreeningRoomList';
import logo from './logo.png'

const HomeBar = () => {
  const [active, setActive] = useState("FirstPage")
  return (
    <div className="div1">
      <div className="div2">
        <img src={logo} alt="logo" />
        <ul className="mainBar">
          <li>
            <button onClick={() => setActive("FirstPage")}>Home</button>
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

export default HomeBar;


