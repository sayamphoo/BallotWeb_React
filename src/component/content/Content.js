import Container from "react-bootstrap/Container";
import "./Content.css";
import logo from "../../img/map.png";

import Footers from "../Footer/Footer";

function Content() {
  let dataDashboard = [
    [1, "https://cdn-icons-png.flaticon.com/512/603/603148.png"],
    [1, "https://cdn-icons-png.flaticon.com/512/5723/5723208.png"],
    [1, "https://cdn-icons-png.flaticon.com/512/423/423786.png"],
  ];

  let dashboard = dataDashboard.map((p) => (
    <div className="d-container">
      <div className="da-grid">
        <div className="d-content">
          <img src={p[1]} />
        </div>
        <div className="d-title">
          <p>Total Number of Income</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="c-content">
      <div className="stt"></div>
      <Container>
        <div className="st-6">
          <div className="chart-container">{dashboard}</div>
        </div>

        <div className="chart-container">
          <div className="c-map">
            <img src={logo} />
          </div>
        </div>
      </Container>
      <Footers />
    </div>
  );
}

export default Content;
