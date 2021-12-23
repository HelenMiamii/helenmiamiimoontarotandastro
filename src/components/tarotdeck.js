import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const TarotDeck = () => (
    <div className="tan">
    <Container>
      <Row className="mx-auto d-flex flex-row align-items-center text-center">
      <Col md className="align-items-center p-5">
      <h1>TAROT DECK</h1>
      
  
      <div className="cubetain">
      <div className="cube">
        <div className="font"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="back"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
      </div>
     
      <a 
      href="https://www.etsy.com/listing/735399500/abrabinah-tarot-tarot-deck-tarot-guide?click_key=6718c14fe04ca09232740f9953c31525e526b211%3A735399500&click_sum=d7f76664&ref=shop_home_active_2&frs=1"
      className="btn btn-outline-primary"
      >BUY ON ETSY⟿</a>
      </Col>
      </Row>
      </Container>
      </div>
)

export default TarotDeck