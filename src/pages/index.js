import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro.js"
import AboutTicker from "../components/aboutticker.js"
import BookSection from "../components/book.js"
import MeTicker from "../components/meticker.js"
import TarotDeck from "../components/tarotdeck.js"

const IndexPage = () => (
  <Layout>
    <Seo title="Helen Miamii Moon - Tarot Reader, Astrologer, and Mystical Creator" />
    <Intro/>
    <AboutTicker/>
    <BookSection/>
    <MeTicker/>
  </Layout>
)

export default IndexPage
