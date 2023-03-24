import React, { useState, useContext } from "react";
import Button from "../components/input/Button";
import { stateCodes } from "../data/data";
import Select from "../components/input/Select";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Modal from "../components/modal/Modal";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.ID);
  const [fullName, setFullName] = useState(user.Name);
  const [address1, setAddress1] = useState(user.Address1);
  const [address2, setAddress2] = useState(user.Address2);
  const [city, setCity] = useState(user.City);
  const [stateQuery, setStateQuery] = useState(user.State);
  const [zip, setZip] = useState(user.ZipCode);

  const labelStyle = "flex gap-16 items-center my-8 [&>*]:text-primary-300";
  const inputStyle = "border-2 border-gray-300 p-2 w-[50%] rounded-lg";

  async function saveProfile(e) {
    e.preventDefault();
    try {
      // if there is actuall content in the form then do
      const submit =  window.confirm("Are you sure?")
      if (submit) {
        if (
          username.length > 0 &&
          fullName.length > 0 &&
          address1.length > 0 &&
          city.length > 0 &&
          stateQuery.length > 0 &&
          zip > 0
        ) {
          const res = await axios.patch(`user/${user.ID}/saveProfile`, {
            id2: username,
            fullname: fullName,
            address1,
            address2,
            city,
            state: stateQuery,
            zip,
          });
          if (res.status === 200) {
            setUser(res.data);
          }
        }
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong...");
    }
  }

  return (
    <>
      <h1 className="text-2xl font-medium mb-2 text-primary-300">Profile</h1>
      <p className="text-primary-200 mb-6">Update your personal details here</p>
      <hr className="text-primary-300 border-primary-300 my-4" />
      <form action="" onSubmit={saveProfile}>
        <label htmlFor="username" className={labelStyle}>
          <p className="font-medium">Username</p>
          <input
            type="text"
            name="username"
            className={inputStyle}
            value={username}
            maxLength={256}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <hr className="text-primary-300 border-primary-300 my-4" />
        <label htmlFor="fullname" className={labelStyle}>
          <p className="font-medium">Full name</p>
          <input
            type="text"
            name="fullname"
            className={inputStyle}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <hr className="text-primary-300 border-primary-300 my-4" />
        <label htmlFor="address1" className={labelStyle}>
          <p className="font-medium">Address 1</p>
          <input
            type="text"
            name="address1"
            className={inputStyle}
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </label>
        <label htmlFor="city" className={labelStyle}>
          <p className="font-medium">Address 2</p>
          <input
            type="text"
            name="city"
            className={inputStyle}
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </label>
        <hr className="text-primary-300 border-primary-300 my-4" />
        <div
          className="
      flex gap-8"
        >
          <label htmlFor="city" className={`${labelStyle}`}>
            <p className="font-medium">City</p>
            <input
              type="text"
              name="city"
              className={`${inputStyle}`}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label htmlFor="state" className={`${labelStyle} gap-6`}>
            <p className="font-medium">State</p>
            <Select
              name="states"
              prompt="Select state"
              data={stateCodes}
              query={stateQuery}
              setQuery={setStateQuery}
              dark={false}
            />
          </label>
          <label htmlFor="zip" className={`${labelStyle} gap-6`}>
            <p className="font-medium">Zip</p>
            <input
              type="number"
              name="zip"
              className={`${inputStyle}`}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </label>
        </div>
        <hr className="text-primary-300 border-primary-300 my-4" />
        <div className="flex w-[25%] gap-10">
          <Button content="save" dark={false} type="submit" />
        </div>
      </form>
    </>
  );
};

export default Profile;
