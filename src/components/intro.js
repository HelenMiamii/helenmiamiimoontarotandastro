import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Tarot from "../images/helen-tarot-astrology.jpg"
import Hearts from "../images/helen-hearts.png"


const SectionIntro = () => (
    <div className="red"> 
    <Container>
      <Row className="mx-auto d-flex flex-row justify-content-center text-center">
        <Col className="form-floating">
        <h3 className="astrology">ASTROLOGY</h3>
        <h3 className="and">&</h3>
        <Image src={Hearts} className="helen-hearts" fluid />
        <Image src={Tarot} className="helen-tarot-reader" fluid />
        <h3 className="tarot">TAROT</h3>
        </Col>
      </Row>
      </Container>
   </div>
)

export default SectionIntro