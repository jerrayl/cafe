import '../App.css';
import { getMenu } from "../API.js"
import React, { useEffect, useState } from 'react';

function Customer() {
  const [name, setName] = useState("");
  const [orderChoice, setOrderChoice] = useState("apple");
  const [menu, setMenu] = useState([]);


  useEffect(()=>{
    const response = getMenu();
    setMenu(response);
  })

  const onSubmitButtonClick = () => {
    // submit to backend
  }

  return (
    <>
      <h2>Order Page</h2>
      <h3>Welcome {name}! Please make an order.</h3>
      <div className="split">
        <div>
          <div className="row">
            <label for="name">Enter your name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="row">
            <label for="menu">Choose a dish:</label>
            <select name="menu" value={orderChoice} onInput={(e) => setOrderChoice(e.target.value)}>
              { // .map creates an option for each item in the menu
                menu.map(item => <option key={item.itemName} value={item.itemName}>{item.displayName}</option>)
              }
            </select>
          </div>
          <div className="row">
            <button onClick={onSubmitButtonClick}>Submit</button>
          </div>
        </div>
        <div>
          <img className="displayImage" src=
            { // .find returns the item corresponding the the user's current choice
              menu.find(item => item.itemName === orderChoice)?.image
            }
            alt="foodImage" />
          <h3>Price: {menu.find(item => item.itemName === orderChoice)?.price}</h3>
        </div>
      </div>
    </>
  );
}

export default Customer;
