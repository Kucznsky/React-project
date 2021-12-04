import React from "react";
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types';

const Repertoire = (props) => {
  //const {date,hour,sold,available,room_nr,free_chairs} = props;
   return(
    <article>
      <section className='center'>
          <Link className='btn' to='/repertoire/add_showing'>Add showing</Link>
          <Link className='btn' to='/repertoire/edit_showing'>Edit showing</Link>
        </section>
      <section className='booklist'>
        {showing.map((showing) => (
          <article className='book' >
            <p className='listFirstLine'>{showing.title}</p>
            <p className='listSmallerText'>{showing.date}</p>
            <p className='listSmallerText'>{showing.hour}</p>
            <p className='listSmallerText'>{showing.sold}</p>
            <p className='listSmallerText'>{showing.available}</p>
            <p className='listSmallerText'>{"Room: "+showing.room_nr}</p>
            <p className='listSmallerText'>{"free chairs: "+showing.free_chairs+","}</p>
          </article>
        ))}
      </section>
    </article>
  );
}

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