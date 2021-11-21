import './App.css';
import React, {useState} from 'react';

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
        <h1 className="companyTitle">[Put cinema name here]</h1>
        <ul>
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
          {active === "ThirdPage" && <ScreeningRooms></ScreeningRooms>}
          {active === "FourthPage" && <Movies></Movies>}
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

const Movies = () => {
  return(<h1>Here will be list of movies</h1>);
}

const ScreeningRooms = () => {
  return(<h1>Here will be list of ScreeningRooms</h1>);
}
//=======================================================================================================

//=======================================================================================================

export default App;
