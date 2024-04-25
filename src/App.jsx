import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavbar from "./components/myNavbar";
import MyFooter from "./components/myFooter";

import Home from "./components/ActionFigure";

import MangaBooks from "./components/MangaBook";

function App() {
  return (
    <>
      {" "}
      <div className="App">
        <MyNavbar />
      </div>
      <Home />
      {/* <AllTheBooks /> */}
      <MangaBooks />
      <MyFooter />
    </>
  );
}

export default App;
