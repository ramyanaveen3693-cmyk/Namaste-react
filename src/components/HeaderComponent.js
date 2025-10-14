import { LOGO_URL } from "../utils/constants.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

export const HeaderComponent = () => {
  let btnName = "Login"
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  useEffect(()=>{
  },[btnNameReact]);

  return (<div className="header">
    <div className="logo-container">
      <img src={LOGO_URL}></img>
    </div>
    <div className="nav-items">
      
      <ul>
        <li>Online Status:{onlineStatus ? "✅" : "❌"}</li>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contactus">CONTACT US</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/grocery">GROCERY</Link></li>
        <button className="login-btn" onClick={()=>{
          btnNameReact === 'Login'? setBtnNameReact("Logout"):  setBtnNameReact("Login")
        }}>{btnNameReact}</button>
      </ul>
    </div>
  </div>)
}

export default HeaderComponent;