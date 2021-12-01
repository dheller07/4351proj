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
            <h1>reserve a table</h1>
            <div className="headerContainer">
                <div class="guest">
                    <div class="reservation_info">
                    <div class="fields guest__fields">
                        <div class="name">
                            <div class="input first">
                                <label for="first">First Name <span class="req"></span></label>
                                <input
                                // v-model="customer.firstName"
                                id="first"
                                required />
                            </div>

                        <div class="input last">
                            <label for="last">Last Name <span class="req"></span></label>
                            <input
                            // v-model="customer.lastName"
                            id="last"
                            required />
                        </div>
                    </div>
                        
                        <div class="contact">
                            <div class="form-group">
                            <div class="input">
                                <label for="email">E-mail <span class="req">*</span></label>
                                <input
                                // v-model="customer.email"
                                id="email"
                                type="email"
                                ></input>
                            </div> 
                            </div>    
                        </div>

                        <div class="input num">
                            <label for="phone">Phone # </label>
                            <input
                                // v-model="customer.phone"
                                placeholder="###-###-####"
                                type="tel"
                                maxlength="12"
                            
                            id="phone"></input>
                        </div>
                        
                        <div class="address">
                            <div class="input address">
                            <label for="maddress">Mailing Address <span class="req">*</span></label>
                            <input
                            // v-model="customer.address"
                            id="maddress"
                            required />                   
                            </div>
                        </div>

                        <div class="address2">
                            <div class="input city">
                                <label for="city">City <span class="req">*</span></label>
                                <input
                                // v-model="customer.city"
                                id="city"
                                required />
                            </div>
                        </div>

                        <div class="num guest">
                            <div class="form-group">
                                <div class="input count">
                                    <label for="no">Guests <span class="req">*</span></label>
                                    <input
                                    v-model="reservation.numGuests"
                                    id="no"
                                    type="number"
                                    required />
                                </div>
                            </div>
                        </div>
                         
                          
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Reservation
