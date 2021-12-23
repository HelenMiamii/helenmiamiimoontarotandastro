import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const AboutPage = () => (
  <Layout>
    <Seo title="Helen Miamii Moon - Tarot Reader, Astrologer, and Mystical Creator" />
    <Container className="about-section"> 
      <Row className="mx-auto d-flex flex-row">
      <Col>
        <p className="about-header">
        Entrepreneurship was something I always felt called to. I finally got to step into it when I decided to turn my mystical hobbies into a business.
        </p>
        <p className="about-body">
        I started with Tarot Reading, which (unexpectedly) drew in a lot of attention. Within a few months of starting out, I found myself with a Tarot Reading residency at Wanderlust Hollywood. That was back in 2016. Since then I’ve got to work with many other brands, toured the country with Wanderlust Festivals, collaborated on creative content, and launched my own tarot deck - <a className="link-secondary" href="https://www.etsy.com/listing/735399500/abrabinah-tarot-a-modern-tarot-deck"> Abrabinah Tarot</a>.
        </p>
        <p className="about-body">
        <i>IMO</i> when we set expectations and rely on predictions, it limits us from experiences that really make the soul sing. It’s why my approach to Astrology and Tarot is less on the future and more on the present.
        </p>
        <p className="about-body">
        By tuning into the present, you’re listening to what The Universe is telling you. <i>Trust.</i> It’s speaking to you all of the time and giving you all of the directions you need.  
        </p>
        <p className="about-body">
        By listening in, you can gather everything you need to make conscientious decisions that are fulling and unique to your own individual journey on this planet.   
        </p>
        <p className="about-body">
        Right now I offer virtual Astrology & Tarot Readings. I also run a Brand Design & Web Development company called, <a className="link-secondary" href="https://abrabinah.com"> Abrabinah Design House</a>. When I’m not in a deep internet rabbit hole, I’m either rock-climbing with my fiancé or decompressing with my furbabies.  
        </p>
        <p className="about-body">
        <b>FEATURED IN: </b> 
        <a className="link-secondary" href="https://www.buzzfeed.com/abbykass/this-interactive-tarot-card-reading-will-reveal-your-higher">BuzzfeedxEko</a>, 
        <a className="link-secondary" href="https://podcasts.apple.com/us/podcast/written-in-the-stars/id1458248671?i=1000448588236"> It’s A Lot</a>, 
        <a className="link-secondary" href="https://www.saraweinreb.com/podcast/6"> Medium Well</a>, 
        <a className="link-secondary" href="https://soundcloud.com/user-707568924/ep25-meet-an-alchemist-helen-miamii-moon"> Alchemy with Ambi</a>, 
        and <a className="link-secondary" href="http://voyagela.com/interview/meet-helen-schmidt-helen-moon-hollywood-silverlake/"> VoyageLA</a>. 
        </p>
        <p className="about-body">
        <b>PUBLISHED IN: </b>
        <a className="link-secondary" href="https://wanderlust.com/journal/gift-guide-astrology/"> Gift Giving by the Stars: Your Astrological Gift Guide</a>, 
        <a className="link-secondary" href="https://wanderlust.com/journal/perfect-volunteer-activity-astrological-sign/"> Volunteer Activity for Your Astrological Sign</a>, 
        and was a regular contributor to Oh Holisticism Monthly Tarotscopes. 
        </p>
        <p className="about-body">
        <b>TAROT READ AT EVENTS HOSTED BY:</b> Outdoor Voices, AGOLDE, Lightning in a Bottle, DOLAB, Savoir Agency, Vitruvi, Teva, Wanderlust, The Hangout-Long Beach, UniqueLA, Overheard LA, and UberEats.
        </p>
       </Col> 
      </Row>
    </Container>
  </Layout>
)

export default AboutPage
