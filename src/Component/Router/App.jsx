import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "../Navbar.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    <ToastContainer/>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default App;
