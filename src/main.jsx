import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import './styles.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Buyers', path: '/buyers' },
  { label: 'Sellers', path: '/sellers' },
  { label: 'Listings', path: '/listings' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

const listings = [
  {
    title: 'Calabasas Modern Estate',
    location: 'Calabasas, CA',
    price: '$3,875,000',
    beds: '5 Beds',
    baths: '6 Baths',
    size: '6,420 Sq Ft',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Encino Private Residence',
    location: 'Encino, CA',
    price: '$2,950,000',
    beds: '4 Beds',
    baths: '5 Baths',
    size: '4,880 Sq Ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Sherman Oaks View Home',
    location: 'Sherman Oaks, CA',
    price: '$2,425,000',
    beds: '4 Beds',
    baths: '4 Baths',
    size: '3,760 Sq Ft',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop',
  },
]

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo-wrap" aria-label="Menendez Realty Group home">
        <img src="/images/menendez-logo-gold.png" alt="Menendez Realty Group" />
      </Link>
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="header-cta" to="/contact">Connect</Link>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© 2026 Menendez Realty Group | Designed by Valleys Design Studio</p>
        <div className="footer-links">
          {navItems.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </div>
      </div>
    </footer>
  )
}

function Label({ children }) {
  return <p className="label">{children}</p>
}

function PageHero({ label, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="container page-hero-content">
        <Label>{label}</Label>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container home-grid">
          <div className="hero-copy">
            <Label>Menendez Realty Group</Label>
            <h1>Luxury Real Estate, Guided With Care.</h1>
            <p>Personalized buying and selling guidance for clients who want clarity, confidence, and elevated representation across Southern California.</p>
            <div className="button-row">
              <Link className="button primary" to="/listings">View Listings</Link>
              <Link className="button secondary" to="/contact">Schedule Consultation</Link>
            </div>
          </div>
          <div className="agent-card">
            <img src="/images/silvia-garcia.avif" alt="Silvia Garcia, REALTOR®" />
            <div className="agent-info">
              <div>
                <Label>REALTOR®</Label>
                <h2>Silvia Garcia</h2>
                <p>Call or Text 818.822.7277</p>
              </div>
              <Link className="round-button" to="/about">↗</Link>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <FeaturedListings />
      <CTA />
    </main>
  )
}

function Stats() {
  const items = ['Local Market Expertise', 'Luxury Buyer Strategy', 'Seller Positioning', 'Concierge-Level Service']
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {items.map((item) => <div className="stat-card" key={item}>{item}</div>)}
      </div>
    </section>
  )
}

function ListingCard({ listing }) {
  return (
    <article className="listing-card">
      <img src={listing.image} alt={listing.title} />
      <div className="listing-content">
        <p className="location">{listing.location}</p>
        <h3>{listing.title}</h3>
        <p className="price">{listing.price}</p>
        <div className="listing-meta"><span>{listing.beds}</span><span>{listing.baths}</span><span>{listing.size}</span></div>
      </div>
    </article>
  )
}

function FeaturedListings() {
  return (
    <section className="white-section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <Label>Featured Properties</Label>
            <h2>Curated Homes For Elevated Living.</h2>
          </div>
          <Link className="button dark-outline" to="/listings">All Listings</Link>
        </div>
        <div className="listings-grid">
          {listings.map((listing) => <ListingCard key={listing.title} listing={listing} />)}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-box">
        <Label>Ready When You Are</Label>
        <h2>Start your real estate journey with a trusted local guide.</h2>
        <Link className="button primary" to="/contact">Connect With Silvia</Link>
      </div>
    </section>
  )
}

function About() {
  return (
    <main>
      <PageHero label="About" title="A trusted real estate experience built around people." text="Menendez Realty Group helps clients move with strategy, confidence, and care — from the first conversation to closing day and beyond." />
      <section className="white-section">
        <div className="container two-col">
          <img className="portrait" src="/images/silvia-garcia.avif" alt="Silvia Garcia" />
          <div>
            <Label>Silvia Garcia</Label>
            <h2>REALTOR® with a refined, client-first approach.</h2>
            <p className="large-text">Whether you are buying your first home, upgrading into a luxury property, or preparing to sell, Silvia brings thoughtful guidance, clear communication, and dedicated representation to every step.</p>
            <div className="mini-grid">
              {['Strategic Negotiation', 'Market Education', 'Luxury Presentation', 'Smooth Communication'].map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  )
}

function Buyers() {
  return (
    <main>
      <PageHero label="Buyers" title="Find the right home with a smarter buying strategy." text="From search planning to offer negotiation, we help buyers move with clarity and confidence." />
      <Process steps={['Discovery Consultation', 'Financing & Search Strategy', 'Private Tours', 'Offer & Negotiation', 'Closing Support']} />
      <section className="olive-section">
        <div className="container two-col reverse-mobile">
          <div>
            <Label>Buyer Support</Label>
            <h2>Clarity before you commit.</h2>
            <p className="large-text">Get thoughtful guidance around neighborhoods, property value, offer strength, contingencies, inspections, and timelines so you can buy with confidence.</p>
          </div>
          <img className="rounded-image" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop" alt="Luxury home interior" />
        </div>
      </section>
    </main>
  )
}

function Sellers() {
  return (
    <main>
      <PageHero label="Sellers" title="Position your home to attract serious, qualified buyers." text="We combine pricing insight, premium presentation, and strong marketing to help your property stand out." />
      <Process steps={['Home Value Review', 'Preparation Plan', 'Photography & Launch', 'Buyer Outreach', 'Offer Review & Closing']} />
      <section className="white-section">
        <div className="container two-col">
          <img className="rounded-image" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop" alt="Luxury home exterior" />
          <div>
            <Label>Seller Strategy</Label>
            <h2>Premium presentation, strategic exposure.</h2>
            <p className="large-text">Your home deserves more than a listing. We prepare the story, visuals, pricing, and buyer journey so your property launches with impact.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function Process({ steps }) {
  return (
    <section className="white-section compact">
      <div className="container">
        <Label>Our Process</Label>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={step}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Listings() {
  return (
    <main>
      <PageHero label="Listings" title="Explore homes with character, comfort, and lasting value." text="Browse a curated selection of properties designed for modern Southern California living." />
      <section className="white-section">
        <div className="container listings-grid wide-listings">
          {listings.concat(listings).map((listing, index) => <ListingCard key={`${listing.title}-${index}`} listing={listing} />)}
        </div>
      </section>
    </main>
  )
}

function Testimonials() {
  const reviews = [
    'Silvia made the process feel calm, organized, and clear from beginning to end.',
    'The communication was excellent. We always knew what was happening and what came next.',
    'Professional, patient, and strategic. We felt represented at every step.',
    'We felt supported through every showing, question, offer, and final decision.',
  ]
  return (
    <main>
      <PageHero label="Testimonials" title="Clients deserve guidance that feels personal and professional." text="A few words from clients who trusted Menendez Realty Group with their real estate journey." />
      <section className="white-section">
        <div className="container testimonial-grid">
          {reviews.map((review) => (
            <div className="testimonial-card" key={review}>
              <p className="stars">★★★★★</p>
              <h3>“{review}”</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function Contact() {
  return (
    <main>
      <PageHero label="Contact" title="Let’s talk about your next move." text="Thank you for visiting Menendez Realty Group. We are excited to assist you on your real estate journey." />
      <section className="white-section">
        <div className="container contact-grid">
          <div className="contact-card">
            <img src="/images/menendez-logo-gold.png" alt="Menendez Realty Group" />
            <h2>Connect With Us</h2>
            <p>MemendezRealtyGroup.com</p>
            <p>Silvia@MenendezRealtyGroup.com</p>
            <p>Call or Text 818.822.7277</p>
            <div className="socials"><span>Instagram</span><span>TikTok</span><span>Facebook</span><span>LinkedIn</span></div>
          </div>
          <form className="contact-form">
            <label>First Name<input type="text" /></label>
            <label>Last Name<input type="text" /></label>
            <label className="full">Email Address<input type="email" /></label>
            <label className="full">Message<textarea rows="6" /></label>
            <button type="button" className="button black">Next</button>
          </form>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
