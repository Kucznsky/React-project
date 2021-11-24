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
  const {room, space} = props;
  return (
    <article className='book'>
      <p className='listFirstLine'>{"Room: "+room}</p>
      <p className='listSmallerText'>{space}</p>
    </article>
  );
}




//===================================================================================
const room = [
{
  id: 1,
  room: '1',
  space: '100 chairs',
},
{
  id: 2,
  room: '2',
  space: '50 chairs',
},
];
//===================================================================================

export default ScreeningRoomsList;