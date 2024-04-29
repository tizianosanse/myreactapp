import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    title: this.props.title,
    img: this.props.src,
    selected: false,
  };

  render() {
    return (
      <Col className="imgCard col-6" key={this.key} md={3} lg={2}>
        <Card className={`${this.state.selected ? "cardX" : ""}`}>
          <Card.Img
            src={this.props.src}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
// {/* <>
//   {/* {manga.map((book) => {
//     return (
//       <Col key={book.asin} md={2}>
//         <Card>
//           <Card.Img
//             src={book.img}
//             onClick={() => {
//               this.setState({ selected: true });
//             }}
//           />

//           <Card.Body>
//             <Card.Title>{book.title}</Card.Title>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   })}{" "}
// </>; */} */}
