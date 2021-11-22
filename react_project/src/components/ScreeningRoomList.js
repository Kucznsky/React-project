import React from "react";

const ScreeningRoomsList = () => {
  return(  
    <section className='booklist'>
      {room.map((room) => {
        return (<Room key={room.id} {...room}></Room>);
      })}
    </section>
  );;
}

const Room = (props) => 
{
  const {number, space} = props;
  return (
    <article className='book'>
      <h1>{number}</h1>
      <h4>{space}</h4>
    </article>
  );
}




//===================================================================================
const room = [
{
  id: 1,
  number: 'room 1',
  space: '100 chairs',
},
{
  id: 2,
  number: 'room 2',
  space: '50 chairs',
},
];
//===================================================================================

export default ScreeningRoomsList;