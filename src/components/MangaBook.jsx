import { Row } from "react-bootstrap";
import manga from "../manga.json";
import { Component } from "react";
import SingleBook from "./SingleBooks";

class MangaBooks extends Component {
  state = {
    img: "",
    title: "",
    selected: false,
  };
  render() {
    return (
      <Row
        className="bg-dark justify-content-center gap-2"
        onClick={() => {
          this.setState({ selected: true });
        }}
      >
        {manga.map((lib) => {
          console.log(lib);
          return <SingleBook key={lib.id} title={lib.title} src={lib.img} />;
        })}
      </Row>
    );
  }
}

export default MangaBooks;
