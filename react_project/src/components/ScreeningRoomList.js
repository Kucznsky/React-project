import React from "react";
import PropTypes from 'prop-types';

class ScreeningRoomsList extends React.Component {
  //const {room_nr,space} = props;
  constructor(props) {
    super(props);

    this.state = {
      room: []
    };
  }
  


  componentDidMount() {
    const address = "https://localhost:5001/Rooms";
    fetch(address,{
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
      })
      .then(response => response.json())
      .then(data => this.setState({room: data.total}));
  }

  render() {
    return(  
      <section className='booklist'>
        {this.state.room.map(room => (
        <article className='book' key={room.id}>
          <p className='listFirstLine'>{"Room: "+room.id}</p>
          <p className='listSmallerText'>{room.capacity+" chairs"}</p>
        </article>
        ))}
      </section>
    );
  }
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