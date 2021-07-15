import '../App.css';

// Any lines relating to context/backend are specific to the approximation of a backend, and can be ignored
import React, { useEffect, useState, useContext } from 'react';
import { Backend } from "../utils/backend";

function Customer() {
  const backend = useContext(Backend);

  const [name, setName] = useState("");
  const [orderChoice, setOrderChoice] = useState("apple");
  const [menu, setMenu] = useState([]);
  const [customerOrders, setCustomerOrders] = useState([]);

  const fetchMenu = () => {
    const menuResponse = backend.getMenu();
    setMenu(menuResponse);
  }

  const fetchCustomerOrders = () => {
    const customerOrderResponse = backend.getCustomerOrders(name);
    setCustomerOrders(customerOrderResponse);
    console.log(customerOrders);
  }


  // This useEffect call obtains menu and order data from the "backend" when this page is loaded
  useEffect(() => {
    fetchMenu();
    fetchCustomerOrders();
  }, [])

  const onSubmitButtonClick = () => {
    backend.submitOrder({
      "name": name,
      "orderChoice": orderChoice
    });
    // re-fetch orders to show the latest order
    fetchCustomerOrders();
  }

  return (
    <>
      <div className="flex justify-center mt-10 items-center">
        <div>
          <h2 className="font-semibold text-lg text-center">Order Page</h2>
          <h2 className="text-md text-center">Welcome {name}! Please make an order.</h2>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
          </div>
          <div className="mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Order:</label>
            <select name="menu" value={orderChoice} onInput={(e) => setOrderChoice(e.target.value)} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              { // .map creates an option for each item in the menu
                menu.map(item => <option key={item.itemName} value={item.itemName}>{item.displayName}</option>)
              }
            </select>
          </div>
          <div className="mt-4 float-right">
            <button onClick={onSubmitButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </div>
        <div>
          <div className="w-32 h-40">
            <img className="w-auto h-auto" src=
              { // .find returns the item corresponding the the user's current choice
                menu.find(item => item.itemName === orderChoice)?.image
              }
              alt="foodImage" />
          </div>
          <h3 className="text-gray-700 text-md font-bold text-center">Price: ${menu.find(item => item.itemName === orderChoice)?.price}</h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <h2 className="font-semibold text-lg text-center">Your Orders</h2>
          {customerOrders.map((order, i) =>
              <h2 key ={i} className="px-5 py-2">{order.orderChoice}</h2>
            )}
        </div>
      </div>
    </>
  );
}

export default Customer;
