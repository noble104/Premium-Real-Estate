import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Bath, BedDouble, Home, MapPin, Menu, X } from 'lucide-react'
import './styles.css'

const navItems = ['Home', 'About', 'Buyers', 'Sellers', 'Listings', 'Testimonials', 'Contact']

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

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false)
  const goTo = (item) => { setPage(item); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <header className="site-header">
      <button className="logo-button" onClick={() => goTo('Home')} aria-label="Go home">
        <img src="/images/menendez-logo-gold.png" alt="Menendez Realty Group" />
      </button>

      <nav className="desktop-nav">
        {navItems.map((item) => (
          <button key={item} onClick={() => goTo(item)} className={page === item ? 'active' : ''}>{item}</button>
        ))}
      </nav>

      <button className="connect-button" onClick={() => goTo('Contact')}>Connect</button>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>

      {open && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <button key={item} onClick={() => goTo(item)}>{item}</button>
          ))}
        </div>
      )}
    </header>
  )
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function PageHero({ label, title, text }) {
  return (
    <section className="page-hero">
      <div className="radial-one" />
      <div className="page-hero-inner">
        <SectionLabel>{label}</SectionLabel>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

function HomePage({ setPage }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <SectionLabel>Menendez Realty Group</SectionLabel>
              <h1>Luxury Real Estate, Guided With Care.</h1>
              <p>Personalized buying and selling guidance for clients who want clarity, confidence, and elevated representation across Southern California.</p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => setPage('Listings')}>View Listings</button>
                <button className="secondary-btn" onClick={() => setPage('Contact')}>Schedule Consultation</button>
              </div>
            </div>

            <div className="agent-card">
              <img src="/images/silvia-garcia.avif" alt="Silvia Garcia, REALTOR®" />
              <div className="agent-details">
                <div>
                  <SectionLabel>REALTOR®</SectionLabel>
                  <h3>Silvia Garcia</h3>
                  <p>Call or Text 818.822.7277</p>
                </div>
                <button onClick={() => setPage('About')}><ArrowUpRight size={20} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <FeaturedListings setPage={setPage} />
    </>
  )
}

function Stats() {
  const items = ['Local Market Expertise', 'Luxury Buyer Strategy', 'Seller Positioning', 'Concierge-Level Service']
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {items.map((item) => <div className="stat-card" key={item}><Home size={28} /><h3>{item}</h3></div>)}
      </div>
    </section>
  )
}

function FeaturedListings({ setPage }) {
  return (
    <section className="listings-section">
      <div className="section-head">
        <div>
          <SectionLabel>Featured Properties</SectionLabel>
          <h2>Curated Homes For Elevated Living.</h2>
        </div>
        <button onClick={() => setPage('Listings')}>All Listings</button>
      </div>
      <div className="listing-grid">{listings.map((listing) => <ListingCard key={listing.title} listing={listing} />)}</div>
    </section>
  )
}

function ListingCard({ listing }) {
  return (
    <article className="listing-card">
      <img src={listing.image} alt={listing.title} />
      <div className="listing-body">
        <p className="location"><MapPin size={14} /> {listing.location}</p>
        <h3>{listing.title}</h3>
        <p className="price">{listing.price}</p>
        <div className="listing-meta"><span><BedDouble size={16} /> {listing.beds}</span><span><Bath size={16} /> {listing.baths}</span><span>{listing.size}</span></div>
      </div>
    </article>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero label="About" title="A trusted real estate experience built around people." text="Menendez Realty Group helps clients move with strategy, confidence, and care — from the first conversation to closing day and beyond." />
      <section className="split-section">
        <img src="/images/silvia-garcia.avif" alt="Silvia Garcia" />
        <div>
          <SectionLabel>Silvia Garcia</SectionLabel>
          <h2>REALTOR® with a refined, client-first approach.</h2>
          <p>Whether you are buying your first home, upgrading into a luxury property, or preparing to sell, Silvia brings thoughtful guidance, clear communication, and dedicated representation to every step.</p>
          <div className="feature-grid">{['Strategic Negotiation', 'Market Education', 'Luxury Presentation', 'Smooth Communication'].map((item) => <div key={item}>{item}</div>)}</div>
        </div>
      </section>
    </>
  )
}

function BuyersPage() {
  return <><PageHero label="Buyers" title="Find the right home with a smarter buying strategy." text="From search planning to offer negotiation, we help buyers move with clarity and confidence." /><Process steps={['Discovery Consultation', 'Financing & Search Strategy', 'Private Tours', 'Offer & Negotiation', 'Closing Support']} /></>
}

function SellersPage() {
  return <><PageHero label="Sellers" title="Position your home to attract serious, qualified buyers." text="We combine pricing insight, premium presentation, and strong marketing to help your property stand out." /><Process steps={['Home Value Review', 'Preparation Plan', 'Photography & Launch', 'Buyer Outreach', 'Offer Review & Closing']} /></>
}

function Process({ steps }) {
  return (
    <section className="process-section">
      <SectionLabel>Our Process</SectionLabel>
      <div className="process-grid">{steps.map((step, index) => <div className="process-card" key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div>
    </section>
  )
}

function ListingsPage({ setPage }) {
  return <><PageHero label="Listings" title="Explore homes with character, comfort, and lasting value." text="Browse a curated selection of properties designed for modern Southern California living." /><FeaturedListings setPage={setPage} /></>
}

function TestimonialsPage() {
  const reviews = ['Silvia made the process feel calm, organized, and clear from beginning to end.', 'The communication was excellent. We always knew what was happening and what came next.', 'Professional, patient, and strategic. We felt represented at every step.']
  return (
    <>
      <PageHero label="Testimonials" title="Clients deserve guidance that feels personal and professional." text="A few words from clients who trusted Menendez Realty Group with their real estate journey." />
      <section className="testimonial-section">{reviews.map((review) => <div className="review-card" key={review}><div>★★★★★</div><p>“{review}”</p></div>)}</section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="Let’s talk about your next move." text="Thank you for visiting Menendez Realty Group. We are excited to assist you on your real estate journey." />
      <section className="contact-section">
        <div className="contact-card">
          <img src="/images/menendez-logo-gold.png" alt="Menendez Realty Group" />
          <h2>Connect With Us</h2>
          <p>MenendezRealtyGroup.com</p>
          <p>Silvia@MenendezRealtyGroup.com</p>
          <p>Call or Text 818.822.7277</p>
          <div className="socials"><span>Instagram</span><span>TikTok</span><span>Facebook</span><span>LinkedIn</span></div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>First Name<input /></label>
          <label>Last Name<input /></label>
          <label className="full">Email Address<input type="email" /></label>
          <label className="full">Message<textarea rows="6" /></label>
          <button>Next</button>
        </form>
      </section>
    </>
  )
}

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <p>© 2026 Menendez Realty Group | Designed by Valleys Design Studio</p>
      <div>{navItems.map((item) => <button key={item} onClick={() => setPage(item)}>{item}</button>)}</div>
    </footer>
  )
}

function App() {
  const [page, setPage] = useState('Home')
  const currentPage = useMemo(() => ({
    Home: <HomePage setPage={setPage} />,
    About: <AboutPage />,
    Buyers: <BuyersPage />,
    Sellers: <SellersPage />,
    Listings: <ListingsPage setPage={setPage} />,
    Testimonials: <TestimonialsPage />,
    Contact: <ContactPage />,
  }[page]), [page])

  return <><Header page={page} setPage={setPage} />{currentPage}<Footer setPage={setPage} /></>
}

createRoot(document.getElementById('root')).render(<App />)
