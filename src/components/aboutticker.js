import * as React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const AboutTicker = () => (
    
    <Container fluid className="ticker-wrap">
      <Row className="ticker">
        <Col>
        <p>Featured In:
        <a className="link-secondary" href="https://www.buzzfeed.com/abbykass/this-interactive-tarot-card-reading-will-reveal-your-higher">BuzzfeedxEko</a>, {' '} 
        <a className="link-secondary" href="https://podcasts.apple.com/us/podcast/written-in-the-stars/id1458248671?i=1000448588236">It’s A Lot</a>, {' '}
        <a className="link-secondary" href="https://www.saraweinreb.com/podcast/6">Medium Well</a>, {' '}
        <a className="link-secondary" href="https://soundcloud.com/user-707568924/ep25-meet-an-alchemist-helen-miamii-moon">Alchemy with Ambi</a>, {' '}
        and <a className="link-secondary" href="http://voyagela.com/interview/meet-helen-schmidt-helen-moon-hollywood-silverlake/">VoyageLA</a> {' '} 
        ☊ ☋ {' '}
        Tarot Read At Events Hosted By: Outdoor Voices, AGOLDE, Lightning in a Bottle, DOLAB, Savoir Agency, Vitruvi, Teva, Wanderlust Festivals, The Hangout-Long Beach, UniqueLA, Overheard LA, UberEats, and Urban Outfitters  
        ☊ ☋ {' '} 
        <a className="link-secondary" href="https://wanderlust.com/journal/gift-guide-astrology/">Gift Giving by the Stars: Your Astrological Gift Guide</a>, {' '} 
        <a className="link-secondary" href="https://wanderlust.com/journal/perfect-volunteer-activity-astrological-sign/">Volunteer Activity for Your Astrological Sign</a> {' '}
        and Oh Holisticism Monthly Tarotscopes
        </p>
        </Col>
      </Row>
      </Container>
 
)

export default AboutTicker