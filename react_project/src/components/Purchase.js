import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom"
import Proptypes from 'prop-types';
import Axios from 'axios';
import select from 'react-select'

const ApiAddress = "https://localhost:5001/"

const Purchase = (props) => {
    const history = useHistory()

    const { id } = useParams()

    const [screening, setScreening] = useState(null)
    const [movie, setMovie] = useState(null)
    const [freeSeats, setFreeSeats] = useState(null)
    // const [freeSeats_options, setFreeSeats_options] = useState(null)
    const [chosenSeat, setChosenSeat] = useState(null)

    useEffect(() => {
        Axios(`${ApiAddress}Screening/${id}`, {
                        method: 'GET'
                    })
                .then(response => { setScreening(response.data); console.log("Fetched screening:"); console.log(response); },
                    error => console.error(error)
                )
    }, [])
    useEffect(() => {
        Axios(`${ApiAddress}Reservation/${id}/free`, {
                            method: 'GET'
                        })
                    .then(response => { setFreeSeats(response.data); console.log("Fetched free seats:"); console.log(response); },
                        error => console.error(error)
                    )
    }, [])
    useEffect(() => {
        if(screening)
            Axios(`${ApiAddress}Film/${screening.filmID}`, {
                            method: 'GET'
                        })
                    .then(response => { setMovie(response.data); console.log("Fetched film:"); console.log(response); },
                        error => console.error(error)
                    )
    }, [screening])

    const handleChooseSeat = (event) => {
        setChosenSeat(event.target.value)
    }
    

    const BuyTicket = () => {
        Axios(`${ApiAddress}Reservation?screeningID=${id}&seatNum=${chosenSeat}`, {
            method: 'POST'
        })
        .then(response => { console.log("Bought ticket:"); console.log(response); },
            error => console.error(error)
        )
        history.goBack()
        // history.push("/purchase/success")
    }

    return (
        <div className='div1'>
            <fieldset>
                <legend>Buy ticket for a movie</legend>
                <ul>
                    <li>
                        <h2>{!movie ? "..." : movie.title}</h2>
                    </li>
                    <li>
                        {/* TODO: Fix not showing option labels. */}
                        {!freeSeats ? "..." : 
                            <select onChange={handleChooseSeat}>
                                {freeSeats.map((seat) => (
                                    <option value={seat}>{seat}</option>
                                ))}
                            </select>
                        }
                    </li>
                    <li>
                        <button disabled={!chosenSeat} onClick={BuyTicket}>Buy</button>
                    </li>
                </ul>
            </fieldset>
        </div>
    )
}

export default Purchase;