import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types';
import Axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faEdit,faFrown} from '@fortawesome/free-solid-svg-icons'
// import {ApiAddress} from '../GlobalConstants';

const ApiAddress = "https://localhost:5001/"

const Repertoire = (props) => {
  const [screenings, setScreenings] = useState(null)
  const [films, setFilms] = useState(null)
  const [rooms, setRooms] = useState(null)
  
  useEffect(() => {
      Axios.get(`${ApiAddress}Screenings` + (props.all ? "" : (props.day ? `/ScreeningsInDay?day=${props.day}` : `/ScreeningNow`)))
          .then(response => { setScreenings(response.data); console.log("Fetched screenings:"); console.log(response)},
              error => console.error(error)
          )
    }, [])
  useEffect(() => {
    if(screenings)
      Axios(`${ApiAddress}Films/List`, {
              method: 'POST',
              data: screenings.map(item => item.filmID)
          })
        .then(response => { setFilms(response.data); console.log("Fetched films by list:"); console.log(response); },
            error => console.error(error)
        )
    // Axios.get(`${ApiAddress}Films/List`)
  }, [screenings])
  useEffect(() => {
    if(screenings)
      Axios(`${ApiAddress}Rooms`, {
              method: 'GET'
          })
        .then(response => { setRooms(response.data); console.log("Fetched rooms:"); console.log(response); },
            error => console.error(error)
        )
    // Axios.get(`${ApiAddress}Films/List`)
  }, [screenings])

  //const {date,hour,sold,available,room_nr,free_chairs} = props;
  return(
    <article>
      {
        props.all ? (
          <section className='center'>
            <Link className='links' to='/repertoire/add_showing'>Add screening <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Link>
            <Link className='links' to='/repertoire/edit_showing'>Edit screening <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
          </section>
        ) :
        (<div></div>)
      }
      <section className='booklist'>
        {!screenings ? <div className='center'><p className='book2'>There is no screenings...<FontAwesomeIcon icon={faFrown}></FontAwesomeIcon></p></div> : screenings.map((item) => (
          <article className='book' key={item.id}>
            <p className='listFirstLine'>
              <Link to={`/movies/${item.filmID}`}>
                {!films ? ("...") : (films.find(film => film.id === item.filmID).title)}
              </Link>
            </p>
            <p className='listSmallerText'>Date: {item.beginsAt}</p>
            <p className='listSmallerText'>Room: { item.roomID }</p>
            <p className='listSmallerText'>Remaining tickets: {!rooms ? "..." : rooms.find(room => room.id === item.roomID).capacity - item.soldTickets}</p>
            <Link to={`/purchase/${item.id}`}>Buy ticket</Link>
            {/* TODO: fix not darkening of id. */}
            <p className='listSmallerText' styles="color: darken(50%)">id: {item.id}</p>
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
  day: Proptypes.object,
  day: Proptypes.bool,
  //  title: Proptypes.string,
  //  date: Proptypes.string,
  //  hour: Proptypes.string,
  //  sold: Proptypes.number,
  //  available: Proptypes.number,
  //  room_nr: Proptypes.number,
  //  free_chairs: Proptypes.array,
 }

export default Repertoire;