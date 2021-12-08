import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom"
import Proptypes from 'prop-types';
import Axios from 'axios';
import select from 'react-select'

const ApiAddress = "https://localhost:5001/"


// TODO: Currently not in use.
const Purchase_success = (props) => {
    return (
        <div className='div1'>
            <h1>You've successfully bought ticket!</h1>
        </div>
    )
}

export default Purchase_success;