import {useParams} from "react-router-dom";

const MovieDetails = () => {
    const {id} = useParams();
    return(<h1>{id}</h1>);
}

export default MovieDetails;