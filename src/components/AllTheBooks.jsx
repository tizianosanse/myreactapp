import { Container, Row } from "react-bootstrap";
import FantasyBooks from "./FantasyBook";
import HorrorBooks from "./Horror";
function AllTheBooks() {
  return (
    <Container className="mt-5 d-flex gap-5 ">
      <Row className="d-flex bg-success">
        <h1>Fantasy</h1>
        <FantasyBooks />
      </Row>

      <Row className="d-flex bg-dark">
        <h1 className="horrorCateg">Horror</h1>
        <HorrorBooks />
      </Row>
    </Container>
  );
}

export default AllTheBooks;
