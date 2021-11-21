import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import React, {useState} from 'react';

function App() {
  return (
    <div>
      <HomeBar></HomeBar>
    </div>
  );
}

//=======================================================================================================
const HomeBar = () => {
  return (
    <div>
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Repertoire</button>
        </li>
        <li>
          <button>Screening rooms</button>
        </li>
        <li>
          <button>Movies</button>
        </li>
        <li>
          <button></button>
        </li>
      </ul>
    </div>
  );
}
//=======================================================================================================
/*const [active, setActive] = useState("FirstCard")
  return(
    <div>
      <div>
        <button onClick={() => setActive("FirstCard")}>First page</button>
        <button onClick={() => setActive("SecondCard")}>Second page</button>
      </div>
      <div>
        {active === "FirstCard" && <Something></Something>}
        {active === "SecondCard" && <SomethingElse></SomethingElse>}
      </div>
    </div>
  );
*/

export default App;
