import React from "react";

    const initialtState = {
        title:"",
        time:"",
        titleError:"",
        timeError:"",
    }

class AddMovie extends React.Component {

    state = initialtState;

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    validate = () => {
        let titleError="";
        let timeError="";

        if(!(this.state.title.charAt(0) === this.state.title.charAt(0).toUpperCase())) {
            titleError = "Title has to begin with the capital letter";
        }
        if(this.state.title === "") {
            titleError = "You have to type a title of the movie";
        }
        if(isNaN(this.state.time)) {
            timeError = "You have to type a number"
        }
        if(this.state.time === "") {
            timeError = "You have to type a time of the movie"
        }

        if(titleError !== "" || timeError !== "") {
            this.setState({titleError, timeError});
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
            this.setState(initialtState);
            //========================//
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
                                type='text' 
                                name="time"
                                value={this.state.time} 
                                onChange={this.handleChange}
                            />
                            <p className='error'>{this.state.timeError}</p>
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