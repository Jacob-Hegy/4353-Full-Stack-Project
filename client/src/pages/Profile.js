import React from "react";
import Button from "../components/input/Button";
import { stateCodes } from "../data/data";
import Select from "../components/input/Select";

const Profile = () => {
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
          <input type="text" name="username" className={inputStyle} />
        </label>
        <hr className="text-primary-300 border-primary-300 my-4" />
        <label htmlFor="fullname" className={labelStyle}>
          <p className="font-medium">Full name</p>
          <input type="text" name="fullname" className={inputStyle} />
        </label>
        <hr className="text-primary-300 border-primary-300 my-4" />
        <label htmlFor="address1" className={labelStyle}>
          <p className="font-medium">Address 1</p>
          <input type="text" name="address1" className={inputStyle} />
        </label>
        <label htmlFor="city" className={labelStyle}>
          <p className="font-medium">Address 2</p>
          <input type="text" name="city" className={inputStyle} />
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
