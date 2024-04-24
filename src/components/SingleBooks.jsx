import { Card, Col } from "react-bootstrap";
function SingleBook(props) {
  return (
    <Col md={2} className="imgCard">
      <Card>
        <Card.Img src={props.src} />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
