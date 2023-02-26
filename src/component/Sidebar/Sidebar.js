import "./Sidebar.css";
import logo from "../../img/swu.png";
import Home from "../../img/house-solid.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="siderbar">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="menu">
        <ul>
          <li>
            <span />
            <Link strict  className="nav-link active selected" to={"/"}>
              HOME
            </Link>
          </li>
          <li>UPLOAD</li>
          <li>STATING</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
