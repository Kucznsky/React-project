import './App.css';
import React from 'react';
import HomeBar from './components/HomeBar';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import Repertoire from './components/Repertoire';
import ScreeningRoomsList from './components/ScreeningRoomList';
import MovieList from './components/MovieList';
import Purchase from './components/Purchase';
import Purchase_success from './components/Purchase_success';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovies';
import AddShowing from './components/AddShowing';
import EditShowings from './components/EditShowings';
import MoviePopularity from './components/MoviePopularity';
import MovieDetails from './components/MovieDetails';

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
            <Repertoire all={true}></Repertoire>
          </Route>
          <Route exact path="/rooms">
            <ScreeningRoomsList></ScreeningRoomsList>
          </Route>
          <Route exact path="/movies">
            <MovieList></MovieList>
          </Route>

          <Route exact path="/movies/:id">
            <MovieDetails></MovieDetails>
          </Route>
          
          <Route exact path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
          <Route exact path="/purchase/success">
            <Purchase_success></Purchase_success>
          </Route>
          <Route exact path="/add_movie">
            <AddMovie></AddMovie>
          </Route>
          <Route exact path="/edit_movie">
            <EditMovie></EditMovie>
          </Route>
          <Route exact path="/repertoire/add_showing">
            <AddShowing></AddShowing>
          </Route>
          <Route exact path="/repertoire/edit_showing">
            <EditShowings></EditShowings>
          </Route>
          <Route exact path="/movie_popularity">
            <MoviePopularity></MoviePopularity>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
