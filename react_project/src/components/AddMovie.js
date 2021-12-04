import React from "react";

class AddMovie extends React.Component {

    state = {
        title:"",
        time:"",
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
                        </li>
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
                        </li>
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