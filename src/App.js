import logo from "./logo.svg";
import "./App.css";
import NavBar from "../src/components/Navbar/index";
import Homepage from "./components/Pages/HomePage/HomePage";
import About from "../src/components/Pages/about";
import Article from "../src/components/Pages/Article/article";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/article" component={Article} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
