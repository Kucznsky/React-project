import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Axios from 'axios';

const ScreeningRoomsList = () => {
  const[room,setRoom] = useState([]);

  useEffect(() => {
     Axios.get("https://localhost:5001/Rooms")
        .then(res => setRoom(res.data));
    }, []);

  return(  
    <section className='booklist'>
      {room.map(room => (
      <article className='book' key={room.id}>
        <p className='listFirstLine'>{"Room: "+room.id}</p>
        <p className='listSmallerText'>{room.capacity+" chairs"}</p>
      </article>
      ))}
    </section>
  );
}

ScreeningRoomsList.propTypes = {
  room_nr: PropTypes.number,
  space: PropTypes.number,
}
 

/*const Room = (props) => 
{
  const {room, space} = props;
  return (
    <article className='book'>
      <p className='listFirstLine'>{"Room: "+room}</p>
      <p className='listSmallerText'>{space}</p>
    </article>
  );
}*/




//===================================================================================
/*const room = [
{
  id: 1,
  room_nr: 1,
  space: 100,
},
{
  id: 2,
  room_nr: 2,
  space: 50,
},
];*/
//===================================================================================

export default ScreeningRoomsList;