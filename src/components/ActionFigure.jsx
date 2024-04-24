import { Component } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import figure from "../figure.json";

class Home extends Component {
  state = {
    selectedFigure: figure[0],
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} lg={6}>
            <Carousel
              onSlide={(slideIndex) =>
                this.setState({ selectedFigure: figure[slideIndex] })
              }
            >
              {figure.map((e) => {
                return (
                  <Carousel.Item e={`e-${e.asin}`}>
                    <h3 className="titleFigure">{e.title}</h3>{" "}
                    <Image src={e.img} className="w-100" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
