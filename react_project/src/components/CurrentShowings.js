import PropTypes from 'prop-types';

const CurrentShowings = (props) => {
  //const {date,hour,sold,available,room_nr,free_chairs} = props;
  var today = getCurrentDate();
  var now = getCurrentTime();
  return(
    <section className='booklist'>
    {showing.filter( showing => showing.hour <= now && showing.ending_hour >= now && showing.date === today).map(filteredShowing => (
      <div className='book'  key={showing.id}>
        <p className='ListFirstLine'>{filteredShowing.title}</p>
        <p className='ListSmallerText'>{filteredShowing.date}</p>
        <p className='ListSmallerText'>{filteredShowing.hour}</p>
        <p className='ListSmallerText'>{filteredShowing.sold}</p>
        <p className='ListSmallerText'>{filteredShowing.available}</p>
        <p className='ListSmallerText'>{"Room: "+filteredShowing.room_nr}</p>
        <p className='ListSmallerText'>{"free chairs: "+filteredShowing.free_chairs}</p>
      </div>
    ))}
    </section>);
}

CurrentShowings.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  hour: PropTypes.string,
  sold: PropTypes.number,
  available: PropTypes.number,
  room_nr: PropTypes.number,
  free_chairs: PropTypes.array,
}

const getCurrentTime = () => {
  let t = new Date()
  let hour = t.getHours();
  let minute = t.getMinutes();
  
  var time = hour+":"+minute;
  return time;
}

const getCurrentDate = () => {

let d = new Date()
let day = d.getDate();
let month = d.getMonth()+1;
let year = d.getFullYear();
var fullDate;

if(day<10)
  fullDate = "0"+day + "." + month + "." + year;
else
  fullDate = day + "." + month + "." + year;
return fullDate;
}

//============================================================================================================================
const showing = [{
  id: 1,
  title: 'Diuna',
  date: '24.11.2021',
  hour: '19:00',
  ending_hour: '21:35',
  sold: 40,
  available: 10,
  room_nr: 2,
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 2,
  title: 'Diuna',
  date: '28.11.2021',
  hour: '23:00',
  ending_hour: '01:35',
  sold: 40,
  available: 10,
  room_nr: 2,
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 3,
  title: 'Diuna',
  date: '28.11.2021',
  hour: '17:00',
  ending_hour: '19:35',
  sold: 40,
  available: 10,
  room_nr: 2,
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
];

export default CurrentShowings;