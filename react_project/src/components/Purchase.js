import React from "react";

class Purchase extends React.Component  {

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
                            <select>
                                <option>Diuna</option>
                            </select>
                        </li>
                        <li>
                            <label>Showings available</label>
                        </li>
                        <li>
                            <label>Sits available</label>
                        </li>
                        <li>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>14</option>
                            </select>
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