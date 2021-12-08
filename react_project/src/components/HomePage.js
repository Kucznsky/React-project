import React, {useState}  from 'react';
import Repertoire from './Repertoire'

const HomePage = () => {
  const [active, setActive] = useState("FirstPage")
  return(
    <div>
      <div  className='center'>
        <button className='btn' onClick = {() => setActive("FirstPage")}>Today showings</button>
        <button className='btn' onClick = {() => setActive("SecondPage")}>Showings right now</button>
      </div>
      <div>
        {active === "FirstPage" && <Repertoire day={Date.now.day}></Repertoire>}
        {active === "SecondPage" && <Repertoire></Repertoire>}
      </div>
    </div>
  );
}

export default HomePage;