import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import manga from "../manga.json";
class SingleBook extends Component {
  state = {
    title: manga[0].title,
    img: manga[0].img,
    selected: false,
  };

  render() {
    return (
      <Col key={this.key} md={2}>
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
