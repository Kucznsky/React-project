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
    <article className='center'>
      <section className='booklist'>
        {room.map((room) => {
          return(<Room key={room.id} {...room}></Room>);
        })}
      </section>
    </article>
  );
}

const Room = (props) => 
{
  const {id, capacity} = props;
  return (
    <section className='book'>
      <p className='listFirstLine'>{"Room: "+id}</p>
      <p className='listSmallerText'>{capacity+" chairs"}</p>
    </section>
  );
}

Room.propTypes = {
  id: PropTypes.number,
  capacity: PropTypes.number,
}

export default ScreeningRoomsList;