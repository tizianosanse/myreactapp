import Card from "react-bootstrap/Card";
import fantasy from "../fantasy.json";
import { Badge, Col } from "react-bootstrap";

function FantasyBooks() {
  return fantasy.map((lib) => {
    console.log(lib);
    return (
      <Col key={`card-${lib.asin}`} className="col-3">
        <Card>
          <Card.Img variant="top" src={lib.img} />
          <Card.Body>
            <Card.Title>{lib.title}</Card.Title>
            <Card.Text>{lib.category}</Card.Text>
            <Badge variant="primary" pill>
              {lib.price}$
            </Badge>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default FantasyBooks;
