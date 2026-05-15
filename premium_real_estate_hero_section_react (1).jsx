import { useMemo, useState } from "react"

const logo = "data:image/webp;base64,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"
const ceoImage = "data:image/webp;base64,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"

const GOLD = "#B59A24"
const OLIVE = "#7B8070"

const navItems = ["Home", "About", "Buyers", "Sellers", "Listings", "Testimonials", "Contact"]

const listings = [
  {
    title: "Calabasas Modern Estate",
    location: "Calabasas, CA",
    price: "$3,875,000",
    beds: "5 Beds",
    baths: "6 Baths",
    size: "6,420 Sq Ft",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Encino Private Residence",
    location: "Encino, CA",
    price: "$2,950,000",
    beds: "4 Beds",
    baths: "5 Baths",
    size: "4,880 Sq Ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Sherman Oaks View Home",
    location: "Sherman Oaks, CA",
    price: "$2,425,000",
    beds: "4 Beds",
    baths: "4 Baths",
    size: "3,760 Sq Ft",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop",
  },
]

function Header({ page, setPage }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
        <button onClick={() => setPage("Home")} className="flex items-center gap-3">
          <img src={logo} alt="Menendez Realty Group" className="h-12 w-auto object-contain lg:h-16" />
        </button>

        <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.22em] text-white/75 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`transition hover:text-[${GOLD}] ${page === item ? "text-[#B59A24]" : ""}`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button onClick={() => setPage("Contact")} className="rounded-full border border-[#B59A24]/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#B59A24] transition hover:bg-[#B59A24] hover:text-black">
          Connect
        </button>
      </div>
    </header>
  )
}

function SectionLabel({ children }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.42em] text-[#B59A24]">{children}</p>
}

function PageHero({ label, title, text }) {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-20 pt-36 text-white lg:px-12 lg:pt-44">
      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 80% 20%, ${GOLD}55, transparent 34%), radial-gradient(circle at 10% 90%, ${OLIVE}77, transparent 30%)` }} />
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
      </div>
    </section>
  )
}

function Home({ setPage }) {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2200&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-12">
          <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <SectionLabel>Menendez Realty Group</SectionLabel>
              <h1 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">Luxury Real Estate, Guided With Care.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">Personalized buying and selling guidance for clients who want clarity, confidence, and elevated representation across Southern California.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button onClick={() => setPage("Listings")} className="rounded-full bg-[#B59A24] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white">View Listings</button>
                <button onClick={() => setPage("Contact")} className="rounded-full border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black">Schedule Consultation</button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-2xl backdrop-blur-xl">
              <img src={ceoImage} alt="Silvia Garcia, REALTOR®" className="h-72 w-full rounded-[1.5rem] object-cover object-top" />
              <div className="mt-6 flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B59A24]">REALTOR®</p>
                  <h3 className="mt-2 text-3xl font-light">Silvia Garcia</h3>
                  <p className="mt-3 text-white/65">Call or Text 818.822.7277</p>
                </div>
                <button onClick={() => setPage("About")} className="h-14 w-14 rounded-full border border-[#B59A24]/60 text-[#B59A24] transition hover:bg-[#B59A24] hover:text-black">↗</button>
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
  return (
    <section className="bg-[#7B8070] px-6 py-10 text-white lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {["Local Market Expertise", "Luxury Buyer Strategy", "Seller Positioning", "Concierge-Level Service"].map((item) => (
          <div key={item} className="rounded-3xl border border-white/15 bg-black/15 p-6">
            <h3 className="text-xl font-light">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturedListings({ setPage }) {
  return (
    <section className="bg-white px-6 py-24 text-black lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Featured Properties</SectionLabel>
            <h2 className="text-4xl font-light md:text-6xl">Curated Homes For Elevated Living.</h2>
          </div>
          <button onClick={() => setPage("Listings")} className="rounded-full border border-black/20 px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white">All Listings</button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {listings.map((listing) => <ListingCard key={listing.title} listing={listing} />)}
        </div>
      </div>
    </section>
  )
}

function ListingCard({ listing }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5">
      <div className="overflow-hidden">
        <img src={listing.image} alt={listing.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-7">
        <p className="text-xs uppercase tracking-[0.25em] text-[#7B8070]">{listing.location}</p>
        <h3 className="mt-3 text-2xl font-light">{listing.title}</h3>
        <p className="mt-4 text-3xl text-[#B59A24]">{listing.price}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-black/60">
          <span>{listing.beds}</span><span>•</span><span>{listing.baths}</span><span>•</span><span>{listing.size}</span>
        </div>
      </div>
    </article>
  )
}

function About() {
  return (
    <>
      <PageHero label="About" title="A trusted real estate experience built around people." text="Menendez Realty Group helps clients move with strategy, confidence, and care — from the first conversation to closing day and beyond." />
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <img src={ceoImage} alt="Silvia Garcia" className="h-[640px] w-full rounded-[2rem] object-cover object-top" />
          <div>
            <SectionLabel>Silvia Garcia</SectionLabel>
            <h2 className="text-5xl font-light">REALTOR® with a refined, client-first approach.</h2>
            <p className="mt-6 text-lg leading-8 text-black/65">Whether you are buying your first home, upgrading into a luxury property, or preparing to sell, Silvia brings thoughtful guidance, clear communication, and dedicated representation to every step.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Strategic Negotiation", "Market Education", "Luxury Presentation", "Smooth Communication"].map((item) => <div key={item} className="rounded-2xl bg-[#7B8070]/10 p-5 text-black/75">{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Buyers() {
  return (
    <>
      <PageHero label="Buyers" title="Find the right home with a smarter buying strategy." text="From search planning to offer negotiation, we help buyers move with clarity and confidence." />
      <Process steps={["Discovery Consultation", "Financing & Search Strategy", "Private Tours", "Offer & Negotiation", "Closing Support"]} />
    </>
  )
}

function Sellers() {
  return (
    <>
      <PageHero label="Sellers" title="Position your home to attract serious, qualified buyers." text="We combine pricing insight, premium presentation, and strong marketing to help your property stand out." />
      <Process steps={["Home Value Review", "Preparation Plan", "Photography & Launch", "Buyer Outreach", "Offer Review & Closing"]} />
    </>
  )
}

function Process({ steps }) {
  return (
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Our Process</SectionLabel>
        <div className="grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[2rem] border border-black/10 p-7">
              <span className="text-sm text-[#B59A24]">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-light">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Listings() {
  return (
    <>
      <PageHero label="Listings" title="Explore homes with character, comfort, and lasting value." text="Browse a curated selection of properties designed for modern Southern California living." />
      <FeaturedListings setPage={() => {}} />
    </>
  )
}

function Testimonials() {
  const reviews = [
    "Silvia made the process feel calm, organized, and clear from beginning to end.",
    "The communication was excellent. We always knew what was happening and what came next.",
    "Professional, patient, and strategic. We felt represented at every step.",
  ]
  return (
    <>
      <PageHero label="Testimonials" title="Clients deserve guidance that feels personal and professional." text="A few words from clients who trusted Menendez Realty Group with their real estate journey." />
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review} className="rounded-[2rem] bg-black p-8 text-white">
              <div className="text-3xl text-[#B59A24]">★★★★★</div>
              <p className="mt-8 text-2xl font-light leading-10">“{review}”</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function Contact() {
  return (
    <>
      <PageHero label="Contact" title="Let’s talk about your next move." text="Thank you for visiting Menendez Realty Group. We are excited to assist you on your real estate journey." />
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-black p-8 text-white lg:p-10">
            <img src={logo} alt="Menendez Realty Group" className="mb-10 h-24 w-auto object-contain" />
            <h2 className="text-4xl font-light">Connect With Us</h2>
            <div className="mt-8 space-y-4 text-white/70">
              <p>MemendezRealtyGroup.com</p>
              <p>Silvia@MenendezRealtyGroup.com</p>
              <p>Call or Text 818.822.7277</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-[#B59A24]">
              <span>Instagram</span><span>•</span><span>TikTok</span><span>•</span><span>Facebook</span><span>•</span><span>LinkedIn</span>
            </div>
          </div>
          <form className="rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/5 lg:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block"><span className="text-sm text-black/60">First Name</span><input className="mt-2 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#B59A24]" /></label>
              <label className="block"><span className="text-sm text-black/60">Last Name</span><input className="mt-2 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#B59A24]" /></label>
              <label className="block md:col-span-2"><span className="text-sm text-black/60">Email Address</span><input className="mt-2 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#B59A24]" /></label>
              <label className="block md:col-span-2"><span className="text-sm text-black/60">Message</span><textarea rows="6" className="mt-2 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#B59A24]" /></label>
            </div>
            <button className="mt-6 rounded-full bg-black px-9 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-[#B59A24] hover:text-black">Next</button>
          </form>
        </div>
      </section>
    </>
  )
}

function Footer({ setPage }) {
  return (
    <footer className="bg-black px-6 py-10 text-white lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <p className="text-sm text-white/55">© 2026 Menendez Realty Group | Designed by Valleys Design Studio</p>
        <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.2em] text-white/60">
          {navItems.map((item) => <button key={item} onClick={() => setPage(item)} className="hover:text-[#B59A24]">{item}</button>)}
        </div>
      </div>
    </footer>
  )
}

export default function MenendezRealtyWebsite() {
  const [page, setPage] = useState("Home")

  const CurrentPage = useMemo(() => ({
    Home: <Home setPage={setPage} />,
    About: <About />,
    Buyers: <Buyers />,
    Sellers: <Sellers />,
    Listings: <Listings />,
    Testimonials: <Testimonials />,
    Contact: <Contact />,
  }[page]), [page])

  return (
    <div className="min-h-screen bg-white font-serif text-black">
      <Header page={page} setPage={setPage} />
      {CurrentPage}
      <Footer setPage={setPage} />
    </div>
  )
}
