import Cookies from "js-cookie";
import React from "react";

const Navbar = () => {
  const user = JSON?.parse(Cookies.get("user"));
  // const token = Cookies.get("token");
  return (
    <div className=" flex justify-around items-center p-7 shadow ">
      <h2 className=" text-2xl text-gray-700 font-semibold">MMS</h2>
      <div className=" flex gap-5 items-center">
        <div className=" flex flex-col gap-3">
          <p className=" text-gray-500 font-semibold">{user?.name}</p>
          <p className=" text-gray-500 font-semibold">{user?.email}</p>
        </div>
        <button
          // onClick={logoutHandler}
          className=" bg-red-500 text-white px-4 py-1 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
