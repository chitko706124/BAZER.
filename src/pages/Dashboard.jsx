import React from "react";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import NavbarUse from "../components/NavbarUse";
// import Products from "../components/Products";

const Dashboard = () => {
  const user = JSON.parse(Cookies.get("user"));
  if (user?.email === "admin@gmail.com") {
    return (
      <div >
        <Navbar />
      </div>
    );
  }
  return (
    <div>
      <NavbarUse />
     
    </div>
  );
};

export default Dashboard;
