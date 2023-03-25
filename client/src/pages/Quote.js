import React, { useContext, useState, useEffect } from "react";
import backgndImg1 from "../assets/Vector 1.svg";
import backgndImg2 from "../assets/Vector 2.svg";
import Button from "../components/input/Button";
import { stateCodes, twoLetterStateList, stateListReverse } from "../data/data";
import Select from "../components/input/Select";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Modal from "../components/modal/Modal";

const Quote = () => {
  const { user, ready } = useContext(UserContext);
  // const [username, setUsername] = useState(user.ID);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [stateQuery, setStateQuery] = useState("");
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  const [galAmount, setGalAmount] = useState("");
  const [price, setPrice] = useState("");
  const [showPriceModule, setShowPriceModule] = useState(false);

  useEffect(() => {
    if (ready && user) {
      setAddress1(user.Address1);
      setAddress2(user.Address2);
      setCity(user.City);
      setStateQuery(stateListReverse[user.State]);
      setZip(user.ZipCode);
    }
  }, [user]);

  if (!ready) return <p>Loading...</p>;

  // if user isnt logged in... send them to login page from Home
  if ((!ready && !user) || (ready && !user)) {
    console.log("user not logged in in account page");
    return <Navigate to={"/login"} />;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(`quote/${user.ID}/addQuote`, {
        address:
          address1 +
          " " +
          address2 +
          " " +
          city +
          ", " +
          twoLetterStateList[stateQuery.toLowerCase()] +
          " " +
          zip.toString(),
        date,
        gals: galAmount,
      });
      console.log(res);
      setPrice(res.data.price);
      setShowPriceModule(true);
    } catch (error) {
      console.log(error);
      alert("Something went wrong...");
    }
  }

  return (
    <div className="flex w-full h-[calc(100vh-75px)] bg-primary-500 justify-center opacity-100 relative overflow-hidden">
      <img src={backgndImg1} className="absolute w-full top-[33%] z-0" alt="" />
      <img src={backgndImg2} className="absolute w-full top-[33%] z-0" alt="" />
      <form
        className="w-[575px] bg-white m-auto font-bold opacity-100 rounded-lg drop-shadow-lg overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="bg-primary-300 text-white text-center py-[18px]">
          <p className="text-lg font-semibold">
            Fill in the form to receive a quote
          </p>
        </div>
        <div className="px-[69px] py-[49px] grid grid-rows-4 gap-5">
          <div className="flex flex-col">
            <label htmlFor="address1">Address 1</label>
            <input
              name="address1"
              id="address1"
              className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address2">Address 2</label>
            <input
              name="address2"
              id="address2"
              className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <label htmlFor="city">City</label>
              <label htmlFor="state">State</label>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                name="city"
                id="city"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Select
                name="states"
                prompt="Select state"
                query={stateQuery}
                setQuery={setStateQuery}
                data={stateCodes}
                dark={false}
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-5">
              <label htmlFor="zipcode">Zip Code</label>
              <label htmlFor="date">Delivery Date</label>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                name="zipcode"
                id="zipcode"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
              <input
                name="date"
                id="date"
                type="date"
                className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col -mb-8">
            <label htmlFor="amount">Product Amount (gallons)</label>
            <input
              name="amount"
              id="amount"
              className="p-2 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"
              value={galAmount}
              onChange={(e) => setGalAmount(e.target.value)}
            />
          </div>
          <Button type="submit" content="Submit" />
        </div>
      </form>
      {showPriceModule && (
        <Modal>
          <div className="w-80 h-40 bg-white flex flex-col justify-center items-center rounded-md text-center relative">
            <button className="absolute top-0 right-0 p-2" onClick={() => setShowPriceModule(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-4">
              Thank you for your purchase
            </h3>
            <p className="text-xl">The total price is: ${price}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Quote;
