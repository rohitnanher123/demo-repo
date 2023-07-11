
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>
       {/* <nav>
        <ul>
          <li>
            {" "}
            <Link to="/Home">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contactus">Contactus</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/ListEmployee">ListEmployee</Link>{" "}
          </li>
        </ul>
      </nav>  */}
      <Outlet />
    </div>
  );
}

export default App;
