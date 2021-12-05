import React from "react";

const initialState = {
    movie: "Dune",
    date: "",
    hour: "",
    screening_room: "1",
    //movieError: "",
    dateError:"",
    hourError:"",
    //screening_roomError:"",
}

class AddShowing extends React.Component {

    state = initialState;

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    validate = () => {
        //let movieError= "";
        let dateError="";
        let hourError="";
        //let screening_roomError="";

       /* if(this.state.movie === "") {
            movieError = "You have to choose a movie";
        }*/
        if(this.state.date === "") {
            dateError = "You have to choose a date";
        }
        if(this.state.hour === "") {
            hourError = "You have to choose an hour";
        }
        /*if(this.state.screening_room === "") {
            screening_roomError = "You have to choose a room";
        }
          if(isNaN(this.state.screening_room)) {
            screening_roomError = "You have to type a number of the screening room";
        }*/

        if(/*movieError !== "" ||*/ dateError !== "" || hourError !== "" /*|| screening_roomError !== ""*/) {
            this.setState({/*movieError,*/dateError, hourError/*, screening_roomError*/});
            return false;
        }
        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        if(isValid) {
            //========================//
            console.log(this.state);
            this.setState(initialState);
            //========================//
        }

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
                                value={this.state.movie}
                                onChange={this.handleChange}
                            >
                                    <option>Dune</option>
                                    <option>DOM GUCCI</option>
                            </select>
                            <p className='error'>{this.state.movieError}</p>
                        </li>
                        <hr />
                        <li>
                            <label>Date</label>
                        </li>
                        <li>
                            <input 
                                type='date'
                                name="date"
                                value={this.state.date}
                                onChange={this.handleChange}

                            />
                            <p className='error'>{this.state.dateError}</p>
                        </li>
                        <hr/>
                        <li>
                            <label>Hour</label>
                        </li>
                        <li>
                            <input 
                                type='time'
                                name="hour"
                                value={this.state.hour}
                                onChange={this.handleChange}
                            />
                            <p className='error'>{this.state.hourError}</p>
                        </li>
                        <hr/>
                        <li>
                            <label>Screening room</label>
                        </li>
                        <li>
                            <select
                                name="screening_room"
                                value={this.state.screening_room}
                                onChange={this.handleChange}
                            >
                                    <option>1</option>
                                    <option>2</option>
                            </select>
                            <p className='error'>{this.state.screening_roomError}</p>
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