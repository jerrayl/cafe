import '../App.css';
import React, { useState } from 'react';

function Admin() {  
  const [orders, setOrders] = useState([]);

  return (
    <>
      <h2>Admin Page</h2>
      {orders.map(order => <span className="row"><p className="bold marginRight">{order.name}</p><p>{order.orderChoice}</p></span>)}
    </>
  );
}

export default Admin;
