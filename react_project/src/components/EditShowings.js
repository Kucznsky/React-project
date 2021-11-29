const EditShowing = () => {
    return(
        <div className='div1'>
            <fieldset>
                <legend>Edit showing description or delete showing</legend>
                <ul>
                    <li>
                        <label>Movie</label>
                    </li>
                    <li>
                        <select></select>
                    </li>
                    <hr />
                       <li>
                        <label>Date</label>
                    </li>
                    <li>
                        <input type='date'></input>
                    </li>
                    <hr/>
                    <li>
                        <label>Hour</label>
                    </li>
                    <li>
                        <input type='text'></input>
                    </li>
                    <hr/>
                     <li>
                        <label>Screening room</label>
                    </li>
                    <li>
                        <select></select>
                    </li>
                    <br/>
                    <li>
                        <button>Confirm</button>
                    </li>
                    <hr />
                    <li>
                        <button>Delete</button>
                    </li>
                </ul>
            </fieldset>
        </div>
    );
}

export default EditShowing;