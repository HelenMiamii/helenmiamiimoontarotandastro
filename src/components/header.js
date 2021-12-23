import * as React from "react"
import PropTypes from "prop-types"
import Circle from "./circle"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Header = ({ siteTitle }) => (
  <header>
  <Navbar expand="lg" fixed="top">
  <Container className="justify-content-center" fluid>
  <div className="desktop"><Circle text="Helen Miamii Moon" arc={300} radius={100} /></div>
  <div className="mobile"><Circle text="Helen Miamii Moon" arc={300} radius={82} /></div>
  <div className="moon"></div>
  </Container>
  </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Helen Miamii Moon`,
}

export default Header
