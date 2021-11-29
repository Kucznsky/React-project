import logo from './logo.png'
import {Link} from 'react-router-dom';

const HomeBar = () => {
  //const [active, setActive] = useState("FirstPage")
  return (
    <div className="div1">
      <div className="div2">
        <img src={logo} alt="logo" />
        <ul className="mainBar">
          <li>
            <Link className='links' to='/'>Home</Link>     
          </li>
          <hr />
          <li>
            <Link className='links' to='/repertoire'>Repertoire</Link>
          </li>
          <hr />
          <li>
            <Link className='links' to='/rooms'>Screening rooms</Link>
          </li>
          <hr />
          <li>
            <Link className='links' to='/movies'>Movies</Link>
          </li>
          <hr />
          <li>
            <Link className='links' to='/purchase'>Buy Ticket</Link>
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