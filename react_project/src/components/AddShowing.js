import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom"
import Proptypes from 'prop-types';
import Axios from 'axios';
import select from 'react-select'

const ApiAddress = "https://localhost:5001/"

// const initialState = {
//     movie: "Dune",
//     date: "",
//     hour: "",
//     screening_room: "1",
//     //movieError: "",
//     dateError:"",
//     hourError:"",
//     //screening_roomError:"",
// }

class AddShowing extends React.Component {
    // history = useHistory()

    // state = initialState;
    state = {
        movie: null,
        movie_options: null,
        room: null,
        room_options: null,
        date: null,
        hour: null,
        
        /*
        public int ID { get; set; }
        public string Title { get; set; }
        // In minutes.
        public int ScreeningTime { get; set; }

        public bool IsShowing { get; set; }
         */
        screening: {
            id: 0, filmID: 0, roomID: 0, soldTickets: 0, beginsAt: Date.now
        }
    }
    /*
  public int ID { get; set; }
  public int FilmID { get; set; }
  public int RoomID { get; set; }
  public int SoldTickets { get; set; }
  // public ICollection<int> TakenSeats { get; set; }

  public DateTime BeginsAt { get; set; }
 */

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    validate = () => {
        let dateError="";
        let hourError="";
        if(this.state.date === "") {
            dateError = "You have to choose a date";
        }
        if(this.state.hour === "") {
            hourError = "You have to choose an hour";
        }

        if(/*movieError !== "" ||*/ dateError !== "" || hourError !== "" /*|| screening_roomError !== ""*/) {
            this.setState({/*movieError,*/dateError, hourError/*, screening_roomError*/});
            return false;
        }
        return true;
    };

    constructor() {
        super()
        Axios(`${ApiAddress}Films`, {
                method: 'GET'
            })
        .then(response => { this.state.movie_options = response.data; console.log("Fetched films:"); console.log(response); },
            error => console.error(error)
        )
    }

    handleSubmit = event => {
        // const history = useHistory()
        event.preventDefault();
        const isValid = this.validate();

        if(isValid) {
            //========================//
            console.log(this.state);
            // this.setState(initialState);
            //========================//
        }

        // history.goBack()
    }

    render() {
        return(
            <form className='div1' onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Add new showing to the list</legend>
                    <ul>
                        <li>
                            <label>Movie</label>
                        </li>
                        <li>
                            <select
                                name="movie"
                                // value={this.state.movie}
                                onChange={this.handleChange}
                            >
                                {!this.state.movie_options ? "Loading..." : this.state.movie_options.map((movie) => (
                                    <option value={movie.id}>{movie.title}</option>
                                ))}
                            </select>
                            {/* <p className='error'>{this.state.movieError}</p> */}
                        </li>
                        <hr />
                        <li>
                            <label>Date</label>
                        </li>
                        <li>
                            <input 
                                type='date'
                                name="date"
                                // value={this.state.date}
                                onChange={this.handleChange}

                            />
                            {/* <p className='error'>{this.state.dateError}</p> */}
                        </li>
                        <hr/>
                        <li>
                            <label>Hour</label>
                        </li>
                        <li>
                            <input 
                                type='time'
                                name="hour"
                                // value={this.state.hour}
                                onChange={this.handleChange}
                            />
                            {/* <p className='error'>{this.state.hourError}</p> */}
                        </li>
                        <hr/>
                        <li>
                            <label>Screening room</label>
                        </li>
                        <li>
                            <select
                                name="screening_room"
                                // value={this.state.screening_room}
                                onChange={this.handleChange}
                            >
                                    <option>1</option>
                                    <option>2</option>
                            </select>
                            {/* <p className='error'>{this.state.screening_roomError}</p> */}
                        </li>
                        <hr/>
                        <br/>
                        <li>
                            <button type='submit'>Confirm</button>
                        </li>
                    </ul>
                </fieldset>
            </form>
        );
    }
}

export default AddShowing;