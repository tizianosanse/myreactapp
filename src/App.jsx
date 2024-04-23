import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavbar from "./components/myNavbar";
import MyFooter from "./components/myFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
function App() {
  return (
    <>
      {" "}
      <div className="App">
        <MyNavbar brandName="AllBooKs" />
      </div>
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
