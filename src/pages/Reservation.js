import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar';
import BannerImage from "../assets/pizza.jpeg";

import '../styles/Reservation.css';
function Reservation() {
     const [date, setDate]= useState(new Date());

    // const onChange = date =>{
    // //     setDate(date);
    // };
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> reserve a table </h1>
                <div>
                    <DatePicker
                        onChange = {setDate}
                        value = {date}  
                        
                    />
                    {console.log(date)}
                    {/* <Calendar onChange = {onChange} value ={date}/> */}
                    <button>reservation</button>
                </div>
            </div>
        </div>
    )
}

export default Reservation
