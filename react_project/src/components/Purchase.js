const Purchase = () => {
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
                </ul>
            </fieldset>
        </div>
    );
}

export default Purchase;