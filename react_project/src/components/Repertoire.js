import React from "react";

const Repertoire = () => {
   return(
    <section className='booklist'>
      {
        showing.map((showing) => {
          return (<Showing key={showing.id} {...showing}></Showing>);
      })}
    </section>
  );
}

const Showing = (props) =>
{
  const {title,date,hour,sold,available,room,free_chairs} = props;
  return (
    <article className='book'>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <h4>{hour}</h4>
      <h4>{sold}</h4>
      <h4>{available}</h4>
      <h4>{room}</h4>
      <h4>{"free chairs: "+free_chairs+","}</h4>
    </article>
  );
}

//=============================================================
const showing = [{
  id: 1,
  title: 'Diuna',
  date: '24.11.2021',
  hour: '18:30',
  sold: '40',
  available: '10',
  room: 'room 2',
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 2,
  title: 'Diuna',
  date: '24.11.2021',
  hour: '20:00',
  sold: '40',
  available: '10',
  room: 'room 2',
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
{
  id: 3,
  title: 'Diuna',
  date: '26.11.2021',
  hour: '17:00',
  sold: '40',
  available: '10',
  room: 'room 2',
  free_chairs: ['1','2','3','4','5','6','7','8','9','10'],
},
];

export default Repertoire;