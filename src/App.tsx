import Home from "./views/home";
import About from "./views/about";
import Header from "./components/header";
import Footer from "./components/footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
