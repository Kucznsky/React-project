import React from "react";
import Axios from "axios";

    const initialtState = {
        title:"",
        screeningTime:"",
        titleError:"",
        screeningTimeError:"",
    }

class AddMovie extends React.Component {

    state = initialtState;

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    validate = () => {
        let titleError="";
        let screeningTimeError="";

        if(!(this.state.title.charAt(0) === this.state.title.charAt(0).toUpperCase())) {
            titleError = "Title has to begin with the capital letter";
        }
        if(this.state.title === "") {
            titleError = "You have to type a title of the movie";
        }
        if(isNaN(this.state.screeningTime)) {
            screeningTimeError = "You have to type a number"
        }
        if(this.state.screeningTime === "") {
            screeningTimeError = "You have to type a time of the movie"
        }

        if(titleError !== "" || screeningTimeError !== "") {
            this.setState({titleError, screeningTimeError});
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
            Axios.post("https://localhost:5001/Films", [{title: this.state.title, screeningTime: this.state.screeningTime}])
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                })
            //========================//
            this.setState(initialtState);
        }
    };

    render() {
        return(
            <form className='div1' onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Add new movie to the list</legend>
                    <ul>
                        <li>
                            <label>Title</label>
                        </li>
                        <li>
                            <input 
                                type="text" 
                                name="title"
                                value={this.state.title} 
                                onChange={this.handleChange}
                            />
                            <p className='error'>{this.state.titleError}</p>
                        </li>
                          <hr/>
                        <li>
                            <label>Time (minutes)</label>
                        </li>
                        <li>
                            <input  
                                type="text" 
                                name="screeningTime"
                                value={this.state.screeningTime} 
                                onChange={this.handleChange}
                            />
                            <p className='error'>{this.state.screeningTimeError}</p>
                        </li>
                        <hr/>
                        <br/>
                        <li>
                            <button type="submit">Confirm</button>
                        </li>
                    </ul>
                </fieldset>
            </form>
        );
    }
}

export default AddMovie;