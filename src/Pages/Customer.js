import '../App.css';
import { getImage } from "../API.js"
import React, { useState } from 'react';

function Customer() {
  const [name, setName] = useState("");
  const [orderChoice, setOrderChoice] = useState("apple");
  const [orders, setOrders] = useState([]);

  const onSubmitButtonClick = () => {
    setOrders(oldOrders => [...oldOrders, {
      "name": name,
      "orderChoice": orderChoice
    }]);
  }

  return (
    <>
      <h2>Order Page</h2>
      <div className="split">
        <div>
          <div className="row">
            <label for="name">Enter your name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="row">
            <label for="menu">Choose a dish:</label>
            <select name="menu" value={orderChoice} onInput={(e) => setOrderChoice(e.target.value)}>
              <option value="apple">Apple</option>
              <option value="orange">Orange</option>
              <option value="banana">Banana</option>
              <option value="kiwi">Kiwi</option>
              <option value="strawberry">Strawberry</option>
            </select>
          </div>
          <div className="row">
            <button onClick={onSubmitButtonClick}>Submit</button>
          </div>
        </div>
        <div>
          <h3>Your name is: {name}</h3>
          <img className="displayImage" src={getImage(orderChoice)} alt="foodImage" />
        </div>
      </div>
    </>
  );
}

export default Customer;
