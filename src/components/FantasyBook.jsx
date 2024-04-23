import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../fantasy.json";
import { Col } from "react-bootstrap";

function FantasyBooks() {
  return fantasy.map((lib) => {
    console.log(lib);
    return (
      <Col className="col-3">
        <Card>
          <Card.Img variant="top" src={lib.img} />
          <Card.Body>
            <Card.Title>{lib.title}</Card.Title>
            <Card.Text>{lib.category}</Card.Text>
            <Button variant="primary">{lib.price}$</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default FantasyBooks;
