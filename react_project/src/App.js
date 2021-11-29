import './App.css';
import React from 'react';
import HomeBar from './components/HomeBar';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import Repertoire from './components/Repertoire';
import ScreeningRoomsList from './components/ScreeningRoomList';
import MovieList from './components/MovieList';
import Purchase from './components/Purchase';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovies';
import AddShowing from './components/AddShowing';
import EditShowings from './components/EditShowings';

function App() {
  return (
    <Router>
      <div>
        <HomeBar></HomeBar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/repertoire">
            <Repertoire></Repertoire>
          </Route>
          <Route exact path="/rooms">
            <ScreeningRoomsList></ScreeningRoomsList>
          </Route>
          <Route exact path="/movies">
            <MovieList></MovieList>
          </Route>
          <Route exact path="/purchase">
            <Purchase></Purchase>
          </Route>

          <Route exact path="/movies/add_movie">
            <AddMovie></AddMovie>
          </Route>
           <Route exact path="/movies/edit_movie">
            <EditMovie></EditMovie>
          </Route>
           <Route exact path="/repertoire/add_showing">
            <AddShowing></AddShowing>
          </Route>
           <Route exact path="/repertoire/edit_showing">
            <EditShowings></EditShowings>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
