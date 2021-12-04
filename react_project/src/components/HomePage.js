import React, {useState}  from 'react';
import CurrentShowings from './CurrentShowings';
import TodayShowings from './TodayShowings';

const HomePage = () => {
  const [active, setActive] = useState("FirstPage")
  return(
    <div>
      <div  className='center'>
        <button className='btn' onClick = {() => setActive("FirstPage")}>Today showings</button>
        <button className='btn' onClick = {() => setActive("SecondPage")}>Showings right now</button>
      </div>
      <div>
        {active === "FirstPage" && <TodayShowings></TodayShowings>}
        {active === "SecondPage" && <CurrentShowings></CurrentShowings>}
      </div>
    </div>
  );
}

export default HomePage;