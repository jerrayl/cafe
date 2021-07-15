import '../App.css';

// Any lines relating to context/backend are specific to the approximation of a backend, and can be ignored
import React, { useEffect, useState, useContext } from 'react';
import { Backend } from "../utils/backend";

function Admin() {
  const [orders, setOrders] = useState([]);
  const backend = useContext(Backend);

  // This useEffect call obtains order data from the "backend" when this page is loaded
  useEffect(() => {
    const response = backend.getOrders();
    setOrders(response);
  }, [backend])

  return (
    <>
      <h2>Admin Page</h2>
      {orders.map(order => <span className="row"><p className="bold marginRight">{order.name}</p><p>{order.orderChoice}</p></span>)}
    </>
  );
}

export default Admin;
