import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';
import '../src/style.css';
import '../confirm.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState(500);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(search.from);
  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  const selectHotel = (bus) => {
    dispatch({ id: bus.id, type: 'HOTEL_SELECTION' });
    navigate('/CustomerInfo');
  };

  return (
    <div className="App">
      <div id="navlist">
        <a href="#">
          Booking<span id="com">.com</span>
        </a>
        <button id="btn">Register</button>
        <button id="btn">Login</button>
        <button id="text_list">List your Property</button>
      </div>
      <div id="navlist2">
        <a href="#">Stays</a>
        <a href="#">Flight</a>
        <a href="#">Flight+Hotel</a>
        <a href="#">Car rentals</a>
        <a href="#">Attractions</a>
        <a href="#">Airport taxis</a>
      </div>
      <div class="cussess_page">
        <div id="circle_success">
          <img
            src="https://www.pngitem.com/pimgs/m/341-3416354_blue-tick-icon-success-icon-png-transparent-png.png"
            alt="pk"
          ></img>
        </div>
        <span id="suceess">BOOKING SUCCESSFULLY</span>
        <p id="success_tbl">
          <tr>
            <th>Location</th>
            <th>Hotel Name</th>
            <th>In Date</th>
            <th>Out Date</th>
            <th>Guest</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{search.from}</td>
            <td>{'King Resort'}</td>
            <td>{search.to}</td>
            <td>{search.date}</td>
            <td>{search.guest}</td>
            <td>{'2000'}</td>
          </tr>
          <br></br>
        </p>
      </div>

      <br></br>
      <br></br>

      <footer>
        <div class="footer-content">
          <h3>Newton Developer</h3>
          <p>
            Booking.com clone web Application is a Booking website where you
            will book Hotels in Any Where.
          </p>
          <ul class="socials">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>
            copyright &copy; <a href="#">Anant Prakash</a>{' '}
          </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
