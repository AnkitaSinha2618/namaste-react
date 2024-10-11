import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  const [reactBtn, setreactBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  //subscribing to the store using a selector (useSelector hook)
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online status: {onlineStatus? "✅" : "🔴"}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              reactBtn === "Login"
                ? setreactBtn("Logout")
                : setreactBtn("Login");
            }}
          >
            {reactBtn}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
