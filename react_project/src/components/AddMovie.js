const AddMovie = () => {
    return(
        <div className='div1'>
            <fieldset>
                <legend>Add new movie to the list</legend>
                <ul>
                    <li>
                        <label>Title</label>
                    </li>
                    <li>
                        <input type="text"></input>
                    </li>
                    <li>
                        <label>Time</label>
                    </li>
                    <li>
                        <input type='text'></input>
                    </li>
                    <li>
                        <button>Confirm</button>
                    </li>
                </ul>
            </fieldset>
        </div>
    );
}

export default AddMovie;