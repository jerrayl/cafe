import '../App.css';

// Any lines relating to context/backend are specific to the approximation of a backend, and can be ignored
import React, { useEffect, useState, useContext } from 'react';
import { Backend } from "../utils/backend";

function Admin() {
  const [orders, setOrders] = useState([]);
  const backend = useContext(Backend);

  // This useEffect call obtains order data from the "backend" when this page is loaded
  useEffect(() => {
    const response = backend.getAllOrders();
    setOrders(response);
  }, [backend])

  return (
    <>
      <div className="flex justify-center mt-10">
        <h2 className="font-semibold text-lg">Orders</h2>
      </div>
      <div className="flex justify-center mt-10">
        <table className="table-auto border-collapse border">
          <thead>
            <tr>
              <th className="border px-5 py-2">Name</th>
              <th className="border px-5 py-2">Item</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order =>
              <tr>
                <td className="border px-5 py-2">{order.name}</td>
                <td className="border px-5 py-2">{order.orderChoice}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
