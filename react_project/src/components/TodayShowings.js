import Proptypes from 'prop-types';

const TodayShowings = (props) => {
  //const {date,hour,sold,available,room_nr,free_chairs} = props;
  var today = getCurrentDate();
  return(
    <section className='booklist'>
    {showing.filter( showing => showing.date === today).map(filteredShowing => (
      <div className='book' key={showing.id}>
        <span><p className='listFirstLine'>{filteredShowing.title}</p></span>
        <p className='listSmallerText'>{filteredShowing.date}</p>
        <p className='listSmallerText'>{filteredShowing.hour}</p>
        <p className='listSmallerText'>{filteredShowing.sold}</p>
        <p className='listSmallerText'>{filteredShowing.available}</p>
        <p className='listSmallerText'>{filteredShowing.room_nr}</p>
        <p className='listSmallerText'>{"free chairs: "+filteredShowing.free_chairs}</p>
      </div>
    ))}
    </section>);
}

TodayShowings.propTypes = {
  title: Proptypes.string,
  date: Proptypes.string,
  hour: Proptypes.string,
  sold: Proptypes.number,
  available: Proptypes.number,
  room_nr: Proptypes.number,
  free_chairs: Proptypes.array,
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
  date: '04.12.2021',
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

export default TodayShowings;