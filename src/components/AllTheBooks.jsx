import { Container, Row } from "react-bootstrap";
import FantasyBooks from "./FantasyBook";

function AllTheBooks() {
  return (
    <Container className="mt-5">
      <Row>
        <FantasyBooks />
      </Row>
    </Container>
  );
}

export default AllTheBooks;
