import React, { Component } from "react";

class Purchase extends Component.React  {

    state = {
        
    }

    render() {
        return(
            <div className='div1'>
                <fieldset>
                    <legend>Buy ticket for a movie</legend>
                    <ul>
                        <li>
                            <label>Search for movies</label>
                        </li>
                        <li>
                            <input type="text" />
                            <button>Search</button>
                        </li>
                        <li>
                            <label>Showings available</label>
                        </li>
                        <li>
                            <select></select>
                        </li>
                        <br/>
                         <li>
                            <button type='submit'>Confirm</button>
                        </li>
                    </ul>
                </fieldset>
            </div>
        );
    }
}

export default Purchase;