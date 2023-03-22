import React, { useState, useContext } from "react";
import Button from "../components/input/Button";
import { stateCodes } from "../data/data";
import Select from "../components/input/Select";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState(null);
  const labelStyle = "flex gap-16 items-center my-8 [&>*]:text-primary-300";
  const inputStyle = "border-2 border-gray-300 p-2 w-[50%] rounded-lg";

  

  return (
    <>
      <h1 className="text-2xl font-medium mb-2 text-primary-300">Profile</h1>
      <p className="text-primary-200 mb-6">Update your personal details here</p>
      <hr className="text-primary-300 border-primary-300 my-4" />
      <form action="">
        <label htmlFor="username" className={labelStyle}>
          <p className="font-medium">Username</p>
          <input
            type="text"
            name="username"
            className={inputStyle}
            value={username}
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
            <input type="text" name="city" className={`${inputStyle}`} />
          </label>
          <label htmlFor="state" className={`${labelStyle} gap-6`}>
            <p className="font-medium">State</p>
            <Select
              name="states"
              prompt="Select state"
              data={stateCodes}
              dark={false}
            />
          </label>
          <label htmlFor="city" className={`${labelStyle} gap-6`}>
            <p className="font-medium">Zip</p>
            <input type="text" name="city" className={`${inputStyle}`} />
          </label>
        </div>
        <hr className="text-primary-300 border-primary-300 my-4" />
        <div className="flex w-[45%] gap-10">
          <Button type="submit" content="save" dark={false} />
          <Button type="submit" content="Cancel" dark />
        </div>
      </form>
    </>
  );
};

export default Profile;
