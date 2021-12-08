import logo from './logo.png'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faVideo, faFilm, faCouch} from '@fortawesome/free-solid-svg-icons'

const HomeBar = () => {
  //const [active, setActive] = useState("FirstPage")
  return (
    <div className="div1">
      <div className="div2">
        <img src={logo} alt="logo" />
        <ul className="mainBar">
          <li>
            <Link className='links' to='/'>Home  <FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>     
          </li>
          <hr />
          <li>
            <Link className='links' to='/repertoire'>Repertoire  <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon></Link>
          </li>
          <hr />
          <li>
            <Link className='links' to='/rooms'>Screening rooms  <FontAwesomeIcon icon={faCouch}></FontAwesomeIcon></Link>
          </li>
          <hr />
          <li>
            <Link className='links' to='/movies'>Movies  <FontAwesomeIcon icon={faFilm}></FontAwesomeIcon></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeBar;


          /*{active === "FirstPage" && <HomePage></HomePage>}
          {active === "SecondPage" && <Repertoire></Repertoire>}
          {active === "ThirdPage" && <ScreeningRoomsList></ScreeningRoomsList>}
          {active === "FourthPage" && <MovieList></MovieList>}*/