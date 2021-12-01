import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> COSC 4351 Group 15 Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
        <Link to ="/reservation">
            <button> Reservation </button>
        </Link>
        <Link to="form">
            <button> Register </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;