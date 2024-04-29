import { Container, Row } from "react-bootstrap";
import manga from "../manga.json";
import { Component } from "react";
import SingleBook from "./SingleBooks";

class MangaBooks extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="bg-dark justify-content-center gap-2 p-5">
          {manga.map((book) => {
            return (
              <SingleBook key={book.asin} title={book.title} src={book.img} />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MangaBooks;
