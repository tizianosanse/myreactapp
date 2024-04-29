import { Component } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

class Comments extends Component {
  state = {
    comments: [],
    write: false,
  };

  fetchComment = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjUxYzdmMzA0NjAwMWFlNTlmOTciLCJpYXQiOjE3MTQ0MDA5MDAsImV4cCI6MTcxNTYxMDUwMH0.Kz5wAl0B6QuexvhFtcjEdeO6dwUTh0Pm6Za1jmEnqeg",
          },
        }
      );
    } catch (error) {}
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Container fluid>
          <Row className="d-flex justify-content-center my-5 ">
            <Col lg={6}>
              <h1 className="m-5">Lascia qui un tuo FeedBack!</h1>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px", width: "100%" }}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Comments;
