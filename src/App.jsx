import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavbar from "./components/myNavbar";
import MyFooter from "./components/myFooter";

import Home from "./components/ActionFigure";

import MangaBooks from "./components/MangaBook";
import Comments from "./components/Comments";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        {" "}
        <div className="App">
          <MyNavbar />
        </div>
        <Home />
        {/* <AllTheBooks /> */}
        <MangaBooks />
        <Comments />
        <MyFooter />
      </>
    );
  }
}

export default App;
