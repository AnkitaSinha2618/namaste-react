import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  // let btnName = "Login";
   const [reactBtn, setreactBtn]= useState("Login");
   console.log("header component render");
   

   const logout = ()=>{
      setreactBtn("Logout")
   }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{reactBtn === "Login"?setreactBtn("Logout"):setreactBtn("Login")}}>{reactBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;