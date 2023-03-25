import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const OrderHistory = () => {
  const data = new Array(8).fill(0);
  const { user } = useContext(UserContext);
  const [quotes, setQuotes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getQuotes() {
      try {
        const res = await axios.get(`/quote/${user.ID}`);
        setQuotes(res.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
    getQuotes();
  }, [location.pathname]);

  console.log(quotes);

  return (
    <>
      <h1 className="text-2xl font-medium mb-2 text-primary-300">
        Order History
      </h1>
      <hr className="text-primary-300 border-primary-200 my-4" />
      <div>
        <table className="w-full mt-8 table-fixed border-collapse">
          <thead className="bg-secondary-300 shadow-lg">
            <tr className="block">
              <th className="p-4 font-semibold">Quote ID</th>
              <th className="p-4 font-semibold">Gallons Requested</th>
              <th className="p-4 font-semibold">Delivery Address</th>
              <th className="p-4 font-semibold">Delivery Date</th>
              <th className="p-4 font-semibold">Suggested Price</th>
              <th className="p-4 font-semibold">Amount Due</th>
            </tr>
          </thead>
          <tbody className="block w-full h-[600px] overflow-y-auto">
            {quotes.map((quote, index) => {
              let deliveryDate = new Date(
                Date.parse(quote.DeliveryDate.replace(/-/g, "/"))
              );
              return (
                <tr className="border-b-2 h-[50px]" key={index}>
                  <td className="text-center">{quote.quoteID}</td>
                  <td className="text-center">{quote.GallonsRequested}</td>
                  <td className="text-center">{quote.DeliveryAddress}</td>
                  <td className="text-center">{deliveryDate.toString()}</td>
                  <td className="text-center">{quote.SuggestedPrice}</td>
                  <td className="text-center">{quote.Total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderHistory;
