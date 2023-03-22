import React from "react";

const OrderHistory = () => {
  const data = new Array(8).fill(0);

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
            {data.map((entry, index) => (
              <tr className="border-b-2 h-[50px]" key={index}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderHistory;
