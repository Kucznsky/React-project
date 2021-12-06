import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types';
import Axios from 'axios';
import {ApiAddress} from '../GlobalConstants';

const Repertoire = (props) => {
  const [screenings, setScreenings] = useState([])
  const [films, setFilms] = useState([])

  useEffect(() => {
      Axios.get(`${ApiAddress}Screenings`)
          .then(response => setScreenings(response.data),
              error => console.error(error)
          )
    }, [])
  // useEffect(() => {
  //   Axios.get("https://localhost:5001/Screenings")
  // }, [screenings])

  //const {date,hour,sold,available,room_nr,free_chairs} = props;
  return(
    <article>
      <section className='center'>
        <Link className='btn' to='/repertoire/add_showing'>Add screening</Link>
        <Link className='btn' to='/repertoire/edit_showing'>Edit screening</Link>
      </section>
      <section className='booklist'>
        {screenings.map((item) => (
          <article className='book' >
            <p className='listFirstLine'>{item.id}</p>
            <p className='listFirstLine'>{item.filmID}</p>
            <p className='listFirstLine'>{item.roomID}</p>
            <p className='listFirstLine'>{item.id}</p>
            <p className='listFirstLine'>{item.id}</p>
            {/* <p className='listFirstLine'>{showing.title}</p>
            <p className='listSmallerText'>{showing.date}</p>
            <p className='listSmallerText'>{showing.hour}</p>
            <p className='listSmallerText'>{showing.sold}</p>
            <p className='listSmallerText'>{showing.available}</p>
            <p className='listSmallerText'>{"Room: "+showing.room_nr}</p>
            <p className='listSmallerText'>{"free chairs: "+showing.free_chairs+","}</p> */}
          </article>
        ))}
      </section>
    </article>
  );
}

/*
  public int ID { get; set; }
  public int FilmID { get; set; }
  public int RoomID { get; set; }
  public int SoldTickets { get; set; }
  // public ICollection<int> TakenSeats { get; set; }

  public DateTime BeginsAt { get; set; }
 */

Repertoire.propTypes = {
  title: Proptypes.string,
  date: Proptypes.string,
  hour: Proptypes.string,
  sold: Proptypes.number,
  available: Proptypes.number,
  room_nr: Proptypes.number,
  free_chairs: Proptypes.array,
}

/*const Showing = (props) =>
{
  const {title,date,hour,sold,available,room,free_chairs} = props;
  return (
    <article className='book'>
      <p className='listFirstLine'>{title}</p>
      <p className='listSmallerText'>{date}</p>
      <p className='listSmallerText'>{hour}</p>
      <p className='listSmallerText'>{sold}</p>
      <p className='listSmallerText'>{available}</p>
      <p className='listSmallerText'>{"Room: "+room}</p>
      <p className='listSmallerText'>{"free chairs: "+free_chairs+","}</p>
    </article>
  );
}*/

//=============================================================
const showing = [{
  id: 1,
  title: 'Diuna',
  date: '24.11.2021',
  hour: '18:30',
   sold: 40,
  available: 10,
  room_nr: 2,
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 2,
  title: 'Diuna',
  date: '24.11.2021',
  hour: '20:00',
    sold: 40,
  available: 10,
  room_nr: 2,
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 3,
  title: 'Diuna',
  date: '26.11.2021',
  hour: '17:00',
   sold: 40,
  available: 10,
  room_nr: 2,
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
];

export default Repertoire;