import React, {useState}  from 'react';

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

const TodayShowings = () => {
  var today = getCurrentDate();
  return(
    <section className='booklist'>
    {showing.filter( showing => showing.date === today).map(filteredShowing => (
      <div className='book'>
        <p className='listFirstLine'>{filteredShowing.title}</p>
        <p className='listSmallerText'>{filteredShowing.date}</p>
        <p className='listSmallerText'>{filteredShowing.hour}</p>
        <p className='listSmallerText'>{filteredShowing.sold}</p>
        <p className='listSmallerText'>{filteredShowing.available}</p>
        <p className='listSmallerText'>{filteredShowing.room}</p>
        <p className='listSmallerText'>{"free chairs: "+filteredShowing.free_chairs}</p>
      </div>
    ))}
    </section>);
}

const CurrentShowings = () => {
  var today = getCurrentDate();
  var now = getCurrentTime();
  return(
    <section className='booklist'>
    {showing.filter( showing => showing.hour <= now && showing.ending_hour >= now && showing.date === today).map(filteredShowing => (
      <div className='book'>
        <p className='ListFirstLine'>{filteredShowing.title}</p>
        <p className='ListSmallerText'>{filteredShowing.date}</p>
        <p className='ListSmallerText'>{filteredShowing.hour}</p>
        <p className='ListSmallerText'>{filteredShowing.sold}</p>
        <p className='ListSmallerText'>{filteredShowing.available}</p>
        <p className='ListSmallerText'>{"Room: "+filteredShowing.room}</p>
        <p className='ListSmallerText'>{"free chairs: "+filteredShowing.free_chairs}</p>
      </div>
    ))}
    </section>);
}

const getCurrentDate = () => {

let d = new Date()
let day = d.getDate();
let month = d.getMonth()+1;
let year = d.getFullYear();

var fullDate = day + "." + month + "." + year;
return fullDate;
}

const getCurrentTime = () => {
  let t = new Date()
  let hour = t.getHours();
  let minute = t.getMinutes();

  var time = hour+":"+minute;
  return time;
}


//============================================================================================================================
const showing = [{
  id: 1,
  title: 'Diuna',
  date: '24.11.2021',
  hour: '19:00',
  ending_hour: '21:35',
  sold: '40',
  available: '10',
  room: '2',
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 2,
  title: 'Diuna',
  date: '24.11.2021',
  hour: '20:00',
  ending_hour: '22:35',
  sold: '40',
  available: '10',
  room: '2',
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 3,
  title: 'Diuna',
  date: '25.11.2021',
  hour: '17:00',
  ending_hour: '19:35',
  sold: '40',
  available: '10',
  room: '2',
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
];

export default HomePage;