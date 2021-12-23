import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Booking from "../images/tarot-card-in-hand.jpg"
import Reading from "../components/reading"

const BookSection = () => (
    <div className="grey">
    <Container>
      <Row className="mx-auto d-flex flex-row align-items-center text-center">
      <Col md className="align-items-center pt-5">
        <h1>READINGS</h1>
        <h2>the Universe is always speaking to you</h2>
        <p>Using Astrology & Tarot, we can amplify them into crystal clear messages.</p>
        <Reading></Reading>
        </Col>
      <Col md> 
        <Image src={Booking} fluid />
        </Col>
      </Row>
      </Container>
      </div>
)

export default BookSection