import "./App.css";

import Content from "component/content/Content";
import Sidebar from "component/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
