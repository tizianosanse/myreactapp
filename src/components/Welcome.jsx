import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      <Container>
        <Alert variant="dark" className="ms-5">
          Welcome To AllBooKs!
        </Alert>
        ;<h2 className="ms-5">I Nostri Prodotti</h2>
      </Container>
    </>
  );
}
export default Welcome;
