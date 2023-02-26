import "./Header.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="b-header">
      <Container>
        <div className="wapper">
          <div className="menu">
            <ul>
              <li>
                <Link className="nav-link active" to={"/"}>
                  HOME
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to={"/"}>
                  MARKET
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to={"/"}>
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>

          <div className="member">
            <span>sas</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
