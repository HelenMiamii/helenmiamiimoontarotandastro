import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Smiley from "../images/smiley.png"

const Footer = () => (
    
    <div className="poppy">
    <Container>
      <Row className="mx-auto d-flex flex-row align-items-center text-center p-5">
        <Col className="align-items-center">
        <Image src={Smiley} className="smiley" fluid />
        <br></br>
        <h6>hello@helenmiamiimoon.com</h6>
        </Col>
      </Row>
      </Container>
      </div>
)

export default Footer