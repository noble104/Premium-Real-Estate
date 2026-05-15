import React, { useState } from "react";
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Star,
  ArrowRight,
  Award,
  Handshake,
  Users,
  TrendingUp,
  Building2,
  Menu,
  CheckCircle,
  Camera,
  Megaphone,
  Target,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const gold = "#C6A15B";
const olive = "#7B8070";
const logo = "/mnt/data/Menendez Logo Secondry Gold.png";
const ceoImage = "/mnt/data/Menendez (1350 x 1350 px) (23)(1).avif";

const pages = ["Home", "About", "Buyers", "Sellers", "Listings", "Testimonials", "Contact"];

const listings = [
  {
    price: "$2,895,000",
    address: "12345 Encino Ave",
    location: "Encino, CA 91436",
    details: "5 BD  |  4.5 BA  |  4,200 SQ FT",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
  },
  {
    price: "$1,695,000",
    address: "4521 Woodley Ave",
    location: "Sherman Oaks, CA 91403",
    details: "4 BD  |  3 BA  |  2,800 SQ FT",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    price: "$3,250,000",
    address: "11600 Dona Pepita Dr",
    location: "Studio City, CA 91604",
    details: "6 BD  |  6 BA  |  5,100 SQ FT",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    price: "$2,195,000",
    address: "3747 Laurel Canyon Blvd",
    location: "Studio City, CA 91604",
    details: "4 BD  |  3 BA  |  3,650 SQ FT",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    price: "$1,499,000",
    address: "5174 Laurel Canyon Blvd",
    location: "Valley Village, CA 91607",
    details: "4 BD  |  3 BA  |  2,600 SQ FT",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
  },
  {
    price: "$3,750,000",
    address: "17885 Collins St",
    location: "Encino, CA 91316",
    details: "5 BD  |  6 BA  |  4,900 SQ FT",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const developmentChecks = {
  hasAllPages: pages.length === 7,
  hasListings: listings.length >= 3,
  hasBrandAssets: Boolean(logo && ceoImage),
};

if (typeof console !== "undefined") {
  console.assert(developmentChecks.hasAllPages, "Expected seven website pages to be configured.");
  console.assert(developmentChecks.hasListings, "Expected at least three listing cards for the UI.");
  console.assert(developmentChecks.hasBrandAssets, "Expected logo and CEO image paths to be configured.");
}

function GoldMotionCTA({ children, onClick, dark = false, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.03, boxShadow: "0 18px 38px rgba(198,161,91,.35)" }}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-white" : "text-black"} ${className}`}
      style={{
        background: dark ? "transparent" : `linear-gradient(135deg, ${gold}, #f1d38a, ${gold})`,
        border: dark ? `1px solid ${gold}` : "none",
      }}
    >
      <motion.span
        className="pointer-events-none absolute top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/45 blur-2xl"
        initial={{ left: "-35%", opacity: 0 }}
        animate={{ left: ["-35%", "45%", "135%"], opacity: [0, 0.75, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
      />
      <motion.span
        className="pointer-events-none absolute top-1/2 h-16 w-36 -translate-y-1/2 rounded-full bg-[#fff3c2]/35 blur-xl"
        initial={{ left: "-45%", opacity: 0 }}
        animate={{ left: ["-45%", "55%", "145%"], opacity: [0, 0.55, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut", delay: 0.08 }}
      />
      <motion.span
        className="relative inline-flex items-center gap-3"
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {children} <ArrowRight size={16} />
      </motion.span>
    </motion.button>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.35em]" style={{ color: gold }}>{eyebrow}</p>}
      <h2 className={`font-serif text-4xl leading-tight md:text-5xl ${light ? "text-white" : "text-neutral-950"}`}>{title}</h2>
      <div className="mx-auto mt-5 h-px w-28" style={{ backgroundColor: gold }} />
      {text && <p className={`mx-auto mt-6 max-w-2xl text-lg leading-8 ${light ? "text-white/70" : "text-neutral-600"}`}>{text}</p>}
    </div>
  );
}

function Nav({ page, setPage }) {
  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-white/15 bg-[#424340]/55 backdrop-blur-[32px] backdrop-saturate-150 supports-[backdrop-filter]:bg-[#424340]/45 shadow-[0_14px_50px_rgba(0,0,0,0.42)]">
      <div className="absolute inset-0 bg-[#424340]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#424340]/80 via-[#424340]/45 to-[#424340]/80" />
      <div className="absolute inset-0 bg-white/[0.045] mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/35" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-black/30" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => setPage("Home")} className="text-left">
          <img src={logo} alt="Menendez Realty Group Logo" className="h-14 w-auto object-contain" />
        </button>
        <nav className="hidden items-center gap-6 lg:flex">
          {pages.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition ${page === item ? "text-[#C6A15B]" : "text-white/80 hover:text-[#C6A15B]"}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden xl:block">
            <GoldMotionCTA onClick={() => setPage("Contact")} className="px-6 py-3 text-[11px]">
              Book A Consultation
            </GoldMotionCTA>
          </div>
          <button className="lg:hidden text-white"><Menu /></button>
        </div>
      </div>
    </header>
  );
}

function PageHero({ title, subtitle, image = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop" }) {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-center text-white">
      <img src={image} className="absolute inset-0 h-full w-full object-cover opacity-35" alt="Luxury home" />
      <div className="absolute inset-0 bg-black/65" />
      <motion.div className="relative mx-auto max-w-4xl" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.7 }}>
        <p className="mb-4 text-xs uppercase tracking-[0.45em]" style={{ color: gold }}>Menendez Realty Group</p>
        <h1 className="font-serif text-5xl leading-tight md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">{subtitle}</p>
      </motion.div>
    </section>
  );
}

function PropertyCard({ item, dark = false }) {
  return (
    <div className={`group border ${dark ? "border-white/12 bg-black" : "border-neutral-200 bg-white"} shadow-sm`}>
      <div className="overflow-hidden">
        <img src={item.image} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" alt={item.address} />
      </div>
      <div className="p-6">
        <p className="font-serif text-2xl" style={{ color: gold }}>{item.price}</p>
        <p className={`mt-3 ${dark ? "text-white" : "text-neutral-950"}`}>{item.address}</p>
        <p className={`text-sm ${dark ? "text-white/60" : "text-neutral-500"}`}>{item.location}</p>
        <p className={`mt-5 text-xs uppercase tracking-[0.18em] ${dark ? "text-white/70" : "text-neutral-600"}`}>{item.details}</p>
        <button className={`mt-6 w-full border py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-[#C6A15B] hover:text-black ${dark ? "text-white" : "text-neutral-950"}`} style={{ borderColor: gold }}>
          View Property
        </button>
      </div>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop" className="h-full w-full object-cover opacity-45" alt="Luxury home exterior" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/65 to-white/25" />
        </div>
        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
            <p className="mb-5 text-xs uppercase tracking-[0.45em]" style={{ color: gold }}>California Real Estate</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-tight text-neutral-950 md:text-7xl">Luxury Real Estate With Trust, Strategy & Results</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Menendez Realty Group helps buyers and sellers move with confidence through thoughtful strategy, premium presentation, and guidance rooted in care.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoldMotionCTA onClick={() => setPage("Contact")}>Start Your Journey</GoldMotionCTA>
              <GoldMotionCTA onClick={() => setPage("Listings")} dark>View Listings</GoldMotionCTA>
            </div>
          </motion.div>
          <motion.div className="relative hidden lg:block" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
            <div className="absolute -right-4 -top-4 h-full w-full border-2" style={{ borderColor: gold }} />
            <div className="relative overflow-hidden bg-neutral-900 shadow-2xl">
              <img src={ceoImage} className="h-[620px] w-full object-cover" alt="Silvia Garcia" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full border" style={{ borderColor: gold }} />
            <img src={ceoImage} className="relative h-[560px] w-full object-cover" alt="Silvia Garcia" />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em]" style={{ color: gold }}>Meet Silvia Garcia</p>
            <h2 className="font-serif text-4xl text-neutral-950 md:text-5xl">Your Trusted Real Estate Advisor</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
              Silvia Garcia brings a refined, relationship-first approach to real estate. Her work is centered on communication, preparation, market knowledge, and a calm process from first conversation to closing day.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[[MapPin, "Local Expertise"], [Handshake, "Strong Negotiator"], [Users, "Client Focused"], [TrendingUp, "Market Knowledge"]].map(([Icon, label]) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto mb-3" style={{ color: gold }} />
                  <p className="text-sm font-semibold text-neutral-800">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10"><GoldMotionCTA onClick={() => setPage("About")}>Learn More About Silvia</GoldMotionCTA></div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em]" style={{ color: gold }}>Featured Listings</p>
              <h2 className="font-serif text-4xl md:text-5xl">Properties That Inspire</h2>
            </div>
            <button onClick={() => setPage("Listings")} className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: gold }}>View All Listings</button>
          </div>
          <div className="grid gap-7 md:grid-cols-3">{listings.slice(0, 3).map((item) => <PropertyCard key={item.address} item={item} dark />)}</div>
        </div>
      </section>

      <WhyChoose />
      <TestimonialsPreview setPage={setPage} />
      <LuxuryCTA setPage={setPage} />
    </>
  );
}

function WhyChoose() {
  const items = [
    [Award, "Trusted Guidance", "Honest advice, clear communication, and support that keeps your best interests at the center."],
    [Building2, "Local Expertise", "Deep understanding of neighborhoods, pricing behavior, property presentation, and market trends."],
    [Handshake, "Negotiation Excellence", "Strong representation to help you protect value and make confident decisions."],
    [Users, "Personalized Service", "A tailored experience designed around your goals, timeline, and next chapter."],
  ];
  return (
    <section className="px-6 py-24 text-white" style={{ backgroundColor: olive }}>
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Why Choose Menendez Realty Group" title="A Real Estate Experience Built Around You" light />
        <div className="grid gap-8 md:grid-cols-4">
          {items.map(([Icon, title, body]) => (
            <div key={title} className="border border-white/20 p-8 text-center">
              <Icon className="mx-auto mb-5" style={{ color: gold }} size={34} />
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview({ setPage }) {
  const reviews = [
    ["Silvia made the entire process smooth, stress-free, and even enjoyable.", "Jessica R.", "Woodland Hills, CA"],
    ["Her knowledge of the market and attention to detail helped us get the best offer on our home.", "Michael & Amanda T.", "Sherman Oaks, CA"],
    ["Professional, responsive, and truly cares about her clients. Highly recommend Silvia!", "David L.", "Studio City, CA"],
  ];
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Client Testimonials" title="Real Stories From Real Clients" />
        <div className="grid gap-7 md:grid-cols-3">
          {reviews.map(([review, name, location]) => (
            <div key={name} className="border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex gap-1" style={{ color: gold }}>{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="font-serif text-2xl leading-9 text-neutral-900">“{review}”</p>
              <p className="mt-6 text-sm font-semibold text-neutral-700">— {name}</p>
              <p className="text-sm text-neutral-500">{location}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><GoldMotionCTA onClick={() => setPage("Testimonials")}>Read More Reviews</GoldMotionCTA></div>
      </div>
    </section>
  );
}

function AboutPage({ setPage }) {
  return (
    <>
      <PageHero title="About Menendez Realty Group" subtitle="A boutique real estate experience led with strategy, care, and commitment to results." />
      <section className="bg-[#fbfaf7] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full border" style={{ borderColor: gold }} />
            <img src={ceoImage} className="relative h-[640px] w-full object-cover" alt="Silvia Garcia" />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em]" style={{ color: gold }}>Silvia Garcia, REALTOR®</p>
            <h2 className="font-serif text-5xl leading-tight">A Passion For People. A Commitment To Results.</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Menendez Realty Group was created to give buyers and sellers a more personal, polished, and strategic real estate experience. Every client deserves more than a transaction; they deserve guidance, preparation, and a trusted advisor who understands what is at stake.
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Silvia Garcia combines local insight, negotiation awareness, and a client-first approach to help people make confident decisions. Whether you are buying your first home, upgrading into a new season, or preparing to sell, her goal is to make the process feel clear and well-managed from start to finish.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                [ShieldCheck, "Integrity First"],
                [Phone, "Clear Communication"],
                [TrendingUp, "Market Knowledge"],
                [Award, "Service Excellence"],
              ].map(([Icon, title]) => (
                <div key={title} className="border bg-white p-6 shadow-sm">
                  <Icon style={{ color: gold }} />
                  <p className="mt-4 font-semibold text-neutral-900">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <LuxuryCTA setPage={setPage} title="Ready to work with a trusted real estate advisor?" />
    </>
  );
}

function BuyersPage({ setPage }) {
  return (
    <>
      <PageHero title="Helping You Find The Perfect Home" subtitle="Buying a home should feel exciting, informed, and supported — not overwhelming." image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1800&auto=format&fit=crop" />
      <ProcessSection
        eyebrow="The Home Buying Journey"
        title="From First Conversation To Closing Day"
        steps={[
          ["01", "Consultation", "We begin with your goals, lifestyle, budget, timeline, and what home truly means for you."],
          ["02", "Home Search", "You receive guidance on neighborhoods, property options, pricing, and market fit."],
          ["03", "Property Tours", "Each showing is approached with intention so you can compare homes with clarity."],
          ["04", "Offer Strategy", "When the right home appears, Silvia helps you prepare a strong and informed offer."],
          ["05", "Closing Day", "You are guided through inspections, documents, timelines, and the final steps to ownership."],
        ]}
      />
      <FeaturePanel
        title="Why Buyers Work With Silvia"
        items={[
          [MapPin, "Local Expertise", "Understand neighborhoods, property value, and what makes each area unique."],
          [Building2, "Smart Home Search", "Focus your time on homes that match your goals instead of chasing every listing."],
          [Handshake, "Strong Negotiation", "Move with confidence when it is time to write, negotiate, and protect your position."],
          [Users, "Personalized Guidance", "Get patient, clear support through every question, step, and decision."],
        ]}
      />
      <LuxuryCTA setPage={setPage} title="Ready to find your dream home?" button="Let’s Get Started" />
    </>
  );
}

function SellersPage({ setPage }) {
  return (
    <>
      <PageHero title="Sell Your Home With Strategy & Confidence" subtitle="A successful sale begins with preparation, presentation, pricing, and the right marketing plan." image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1800&auto=format&fit=crop" />
      <ProcessSection
        eyebrow="The Selling Process"
        title="A Thoughtful Plan For A Stronger Sale"
        steps={[
          ["01", "Home Evaluation", "We review your home, market position, comparable properties, and ideal selling timeline."],
          ["02", "Market Preparation", "You receive practical recommendations to help the property show at its best."],
          ["03", "Professional Marketing", "Your home is presented with polished visuals, strong copy, and targeted exposure."],
          ["04", "Negotiation", "Silvia helps you review offers carefully and negotiate with your goals in mind."],
          ["05", "Successful Closing", "The process is managed through inspections, contingencies, documents, and final handoff."],
        ]}
      />
      <MarketingSection />
      <section className="bg-[#fbfaf7] px-6 py-24">
        <div className="mx-auto max-w-4xl bg-white p-10 shadow-sm">
          <SectionTitle eyebrow="Home Valuation" title="Find Out What Your Home Is Worth" text="Share a few details and Menendez Realty Group will help you understand your home’s current market position." />
          <div className="grid gap-5 md:grid-cols-2">
            <input className="border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B]" placeholder="Name" />
            <input className="border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B]" placeholder="Email" />
            <input className="border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B] md:col-span-2" placeholder="Property Address" />
            <div className="md:col-span-2"><GoldMotionCTA onClick={() => setPage("Contact")}>Request Home Valuation</GoldMotionCTA></div>
          </div>
        </div>
      </section>
    </>
  );
}

function ListingsPage({ setPage }) {
  return (
    <>
      <PageHero title="Properties That Inspire" subtitle="Browse featured listings and discover homes designed for your next chapter." />
      <section className="bg-[#fbfaf7] px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 bg-white p-5 shadow-sm md:grid-cols-6">
          <input className="border border-neutral-200 px-4 py-3 md:col-span-2" placeholder="City, neighborhood, ZIP" />
          <input className="border border-neutral-200 px-4 py-3" placeholder="Min Price" />
          <input className="border border-neutral-200 px-4 py-3" placeholder="Max Price" />
          <input className="border border-neutral-200 px-4 py-3" placeholder="Beds" />
          <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-black" style={{ backgroundColor: gold }}>Search</button>
        </div>
      </section>
      <section className="bg-[#fbfaf7] px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-neutral-600">Featured properties available for review.</p>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Sort by: Newest</p>
          </div>
          <div className="grid gap-7 md:grid-cols-3">{listings.map((item) => <PropertyCard key={item.address} item={item} />)}</div>
        </div>
      </section>
      <LuxuryCTA setPage={setPage} title="Interested in a private property consultation?" />
    </>
  );
}

function TestimonialsPage({ setPage }) {
  const reviews = [
    ["Silvia made the entire process smooth, stress-free, and even enjoyable. She made sure we understood every step and never felt rushed.", "Jessica R.", "Woodland Hills, CA"],
    ["Her knowledge of the market and attention to detail helped us get the best offer on our home. We felt prepared from the start.", "Michael & Amanda T.", "Sherman Oaks, CA"],
    ["Professional, responsive, and truly cares about her clients. Highly recommend Silvia to anyone buying or selling.", "David L.", "Studio City, CA"],
    ["The communication was clear from beginning to end. We always knew what was happening and what came next.", "Maria C.", "Encino, CA"],
    ["Silvia helped us make a confident decision in a competitive market. Her guidance was honest and thoughtful.", "Anthony P.", "Valley Village, CA"],
    ["A luxury experience with genuine care. Every detail felt organized, polished, and intentional.", "Lauren S.", "Los Angeles, CA"],
  ];
  return (
    <>
      <PageHero title="What Clients Say About Working With Us" subtitle="Real estate guidance that is professional, personal, and built on trust." />
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-3">
          {reviews.map(([review, name, location]) => (
            <div key={name} className="border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex gap-1" style={{ color: gold }}>{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
              <p className="font-serif text-2xl leading-9 text-neutral-900">“{review}”</p>
              <p className="mt-6 text-sm font-semibold text-neutral-700">— {name}</p>
              <p className="text-sm text-neutral-500">{location}</p>
            </div>
          ))}
        </div>
      </section>
      <LuxuryCTA setPage={setPage} title="Ready to create your own success story?" />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero title="Let’s Start Your Real Estate Journey" subtitle="Thank you for visiting Menendez Realty Group. Send us a message or call/text 818.822.7277." />
      <section className="bg-[#fbfaf7] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <form className="grid gap-5 bg-white p-8 shadow-sm md:grid-cols-2">
            <input className="border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B]" placeholder="First Name" />
            <input className="border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B]" placeholder="Last Name" />
            <input className="border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B]" placeholder="Email" />
            <input className="border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B]" placeholder="Phone" />
            <textarea className="min-h-40 border border-neutral-200 px-5 py-4 outline-none focus:border-[#C6A15B] md:col-span-2" placeholder="Message" />
            <div className="md:col-span-2"><GoldMotionCTA>Send Message</GoldMotionCTA></div>
          </form>
          <ContactCard />
        </div>
      </section>
      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden border border-neutral-200 bg-[#e9e2d3] p-10 text-center">
          <MapPin className="mx-auto mb-4" style={{ color: gold }} size={38} />
          <h3 className="font-serif text-3xl">Serving The Greater Los Angeles Area</h3>
          <p className="mt-3 text-neutral-600">Map embed placeholder for Menendez Realty Group location/service area.</p>
        </div>
      </section>
    </>
  );
}

function ProcessSection({ eyebrow, title, steps }) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <div className="grid gap-5 md:grid-cols-5">
          {steps.map(([num, step, body]) => (
            <div key={step} className="border border-neutral-200 bg-white p-6 text-center shadow-sm">
              <p className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border font-serif text-xl" style={{ borderColor: gold, color: gold }}>{num}</p>
              <h3 className="font-serif text-xl text-neutral-950">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturePanel({ title, items }) {
  return (
    <section className="px-6 py-24 text-white" style={{ backgroundColor: olive }}>
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Designed For Buyers" title={title} light />
        <div className="grid gap-8 md:grid-cols-4">
          {items.map(([Icon, heading, body]) => (
            <div key={heading} className="border border-white/20 p-8 text-center">
              <Icon className="mx-auto mb-5" style={{ color: gold }} size={34} />
              <h3 className="font-serif text-2xl">{heading}</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketingSection() {
  const items = [
    [Camera, "Professional Presentation", "High-quality visuals and thoughtful listing preparation help your property make a stronger first impression."],
    [Megaphone, "Digital Exposure", "Your home is positioned across relevant channels with clear messaging and polished creative direction."],
    [Target, "Buyer Targeting", "Marketing is shaped around the most likely buyer profile for your property, price point, and location."],
    [CheckCircle, "Offer Review", "Every offer is reviewed with care so you understand terms, timing, risk, and opportunity."],
  ];
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Marketing Strategy" title="Premium Marketing For A Stronger Market Presence" text="Selling a home is not just about listing it. It is about positioning it beautifully, presenting it clearly, and creating buyer confidence." light />
        <div className="grid gap-8 md:grid-cols-4">
          {items.map(([Icon, heading, body]) => (
            <div key={heading} className="border border-white/15 p-8">
              <Icon style={{ color: gold }} />
              <h3 className="mt-5 font-serif text-2xl">{heading}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-6 py-20 text-white" style={{ backgroundColor: olive }}>
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">
        {[
          ["300+", "Homes Sold"],
          ["250+", "Happy Clients"],
          ["10+", "Years Experience"],
          ["20+", "Communities Served"],
        ].map(([num, label]) => (
          <div key={label}>
            <p className="font-serif text-5xl" style={{ color: gold }}>{num}</p>
            <p className="mt-2 uppercase tracking-widest text-white/75">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactCard() {
  return (
    <div className="bg-neutral-950 p-8 text-white">
      <div className="flex items-center gap-5 border-b border-white/10 pb-7">
        <img src={ceoImage} className="h-20 w-20 rounded-full object-cover" alt="Silvia Garcia" />
        <div>
          <h3 className="font-serif text-3xl">Silvia Garcia</h3>
          <p className="text-sm uppercase tracking-[0.25em]" style={{ color: gold }}>REALTOR®</p>
        </div>
      </div>
      <div className="mt-8 space-y-5 text-white/80">
        <p className="flex items-center gap-3"><Mail size={18} style={{ color: gold }} /> Silvia@MenendezRealtyGroup.com</p>
        <p className="flex items-center gap-3"><Phone size={18} style={{ color: gold }} /> Call or Text 818.822.7277</p>
        <p className="flex items-center gap-3"><Home size={18} style={{ color: gold }} /> MenendezRealtyGroup.com</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        {["IG", "TT", "FB", "IN"].map((item) => (
          <span key={item} className="flex h-11 w-11 items-center justify-center border border-white/15 text-xs font-bold tracking-widest text-white/85">{item}</span>
        ))}
      </div>
    </div>
  );
}

function LuxuryCTA({ setPage, title = "Ready To Buy Or Sell With Confidence?", button = "Contact Silvia" }) {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center text-black">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop"
        className="absolute inset-0 h-full w-full object-cover"
        alt="Luxury home background"
      />
      <div className="absolute inset-0 bg-white/70 backdrop-brightness-[0.9]" />
      <div className="absolute inset-0 bg-black/8" />
      <motion.div
        className="absolute inset-0 opacity-35"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "linear-gradient(120deg, transparent, rgba(198,161,91,.55), transparent)", backgroundSize: "220% 220%" }}
      />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-serif text-4xl text-black md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-black/70">Let’s create your next chapter together with clarity, confidence, and elevated real estate guidance.</p>
        <div className="mt-8"><GoldMotionCTA onClick={() => setPage("Contact")}>{button}</GoldMotionCTA></div>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="border-t border-white/10 bg-[#424340] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <button onClick={() => setPage("Home")} className="text-left"><img src={logo} alt="Menendez Realty Group Logo" className="h-16 w-auto object-contain" /></button>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: gold }}>Quick Links</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/65">
            {pages.map((item) => <button key={item} onClick={() => setPage(item)} className="text-left hover:text-[#C6A15B]">{item}</button>)}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em]" style={{ color: gold }}>Connect With Us</p>
          <p className="text-sm text-white/65">Silvia@MenendezRealtyGroup.com</p>
          <p className="mt-2 text-sm text-white/65">818.822.7277</p>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">© 2026 Menendez Realty Group | Designed by Valleys Design Studio</p>
    </footer>
  );
}

export default function MenendezRealtyWebsite() {
  const [page, setPage] = useState("Home");
  const pageMap = {
    Home: <HomePage setPage={setPage} />,
    About: <AboutPage setPage={setPage} />,
    Buyers: <BuyersPage setPage={setPage} />,
    Sellers: <SellersPage setPage={setPage} />,
    Listings: <ListingsPage setPage={setPage} />,
    Testimonials: <TestimonialsPage setPage={setPage} />,
    Contact: <ContactPage />,
  };

  return (
    <main className="min-h-screen bg-white">
      <Nav page={page} setPage={setPage} />
      <AnimatePresence mode="wait">
        <motion.div key={page} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
          {pageMap[page]}
        </motion.div>
      </AnimatePresence>
      <Footer setPage={setPage} />
    </main>
  );
}
