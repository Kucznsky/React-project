import React from "react";

class AddShowing extends React.Component {

    state = {
        movie: "",
        date: "",
        hour: "",
        screening_room: "",
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

     handleSubmit = event => {
        event.preventDefault();
        //========================//
        console.log(this.state);
        //========================//
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
                        </li>
                        <hr/>
                        <li>
                            <label>Hour</label>
                        </li>
                        <li>
                            <input 
                                type='text'
                                name="hour"
                                value={this.state.hour}
                                onChange={this.handleChange}
                            />
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
                        </li>
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