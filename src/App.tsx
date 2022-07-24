import { Outlet } from "react-router-dom";

import NavBar from "./components/nav-bar";
import Header from "./components/header";
import Footer from "./components/footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
