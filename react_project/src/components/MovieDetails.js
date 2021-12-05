import {useParams} from "react-router-dom";

const MovieDetails = () => {
    const {id} = useParams();
    return(<h1>{id}</h1>);
}

export default MovieDetails;

//================================================
/*const movie = [
{
  id: 1,
  title: 'Diuna',
  time: '155min',
},
{
  id: 2,
  title: 'DOM GUCCI',
  time: '158min',
},
];*/