import React, { useState } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../src/style.css';
import '../pay.css';

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payment, setPayment] = useState({
    from: '',
    to: '',
    date: '',
    guest: '',
  });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const payValue = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };
  const PayHotelFunction = () => {
    setIsValidated(true);
    if (!payment.from) {
      setError(true);
      alert('Please Enter Country Name');
      return;
    } else if (!payment.to) {
      setError(true);
      alert('Please Enter In Date ');
      return;
    } else if (!payment.date) {
      setError(true);
      alert('Please Enter Out Date ');
      return;
    } else if (!payment.guest) {
      setError(true);
      alert('Enter Number of Guest ');
      return;
    }
    dispatch({ payment, type: 'PAY_HOTEL' });
    navigate('CustomerInfo');
  };

  return (
    <div>
      <h2>erttrdyryr</h2>
      <div class="container_pay">
        <form action="">
          <div class="row_pay">
            <div class="col_pay">
              <h3 class="title">billing address</h3>

              <div class="inputBox_pay">
                <span>full name :</span>
                <input type="text" placeholder="john deo"></input>
              </div>
              <div class="inputBox_pay">
                <span>email :</span>
                <input type="email" placeholder="example@example.com"></input>
              </div>
              <div class="inputBox_pay">
                <span>address :</span>
                <input
                  type="text"
                  placeholder="room - street - locality"
                ></input>
              </div>
              <div class="inputBox_pay">
                <span>city :</span>
                <input type="text" placeholder="mumbai"></input>
              </div>

              <div class="flex_pay">
                <div class="inputBox_pay">
                  <span>state :</span>
                  <input type="text" placeholder="india"></input>
                </div>
                <div class="inputBox_pay">
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456"></input>
                </div>
              </div>
            </div>

            {/* <div class="col_pay">
              <h3 class="title_pay">payment</h3>

              <div class="inputBox_pay">
                <span>cards accepted :</span>
                <img src="images/card_img.png" alt=""></img>
              </div>
              <div class="inputBox_pay">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo"></input>
              </div>
              <div class="inputBox_pay">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"></input>
              </div>
              <div class="inputBox_pay">
                <span>exp month :</span>
                <input type="text" placeholder="january"></input>
              </div>

              <div class="flex_pay">
                <div class="inputBox_pay">
                  <span>exp year :</span>
                  <input type="number" placeholder="2022"></input>
                </div>
                <div class="inputBox_pay">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234"></input>
                </div>
              </div> */}
            {/* </div> */}
          </div>

          <input
            type="submit"
            value="proceed to checkout"
            class="submit-btn"
          ></input>
        </form>
      </div>
    </div>
  );
};
