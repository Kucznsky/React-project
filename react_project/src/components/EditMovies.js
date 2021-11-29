const EditMovies = () => {
    return(
        <div className='div1'>
            <fieldset>
                <legend>Edit or delete</legend>
                <ul>
                    <li>
                        <label>Title</label>
                    </li>
                    <li>
                        <input type="text" />
                    </li>
                    <li>
                        <label>Time</label>
                    </li>
                    <li>
                        <input type='text'></input>
                    </li>
                    <li>
                        <button>Confirm Changes</button>
                    </li>
                    <br/>
                    <li>
                        <button>Delete</button>
                    </li>
                </ul>
            </fieldset>
        </div>
    );
}

export default EditMovies;