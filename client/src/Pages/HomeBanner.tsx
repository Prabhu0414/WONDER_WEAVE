import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { 
ChevronRight,
  
  Calendar,
  Compass,
  Facebook,
  Twitter,
  Sparkles,
  Mountain,
  Globe2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "../Components/Button";
import { ThemeToggle } from "../Components/ThemeToggle";
import HeroStat from "../Components/HeroStat";
import { GradientButton } from "../ui/gradient-button";
import { HeaderBlock } from "../Components/HeaderBlock";
import { DestinationCard } from "../Components/DestinationCard";
import { destinations } from "../data/destinations";
import { features } from "../data/features";
import kashmir from "../assets/kashmir-hero.jpg";


/* ---------- Landing Page ---------- */
export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setMobileOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-extrabold tracking-tight">
              Wonder Weave
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "#", label: "Home" },
              { href: "#destinations", label: "Destinations" },
              { href: "#features", label: "Features" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-gray-700 hover:text-orange-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 text-white shadow-lg">
              Sign Up
            </Button>
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-white/80 backdrop-blur ${mobileOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="container mx-auto px-4 py-4 grid gap-2">
            {["Home", "Destinations", "Features", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-2 font-medium hover:text-orange-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <img
              src={kashmir}
              alt="Kashmir Valley"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>

          <div className="relative container mx-auto flex flex-col items-center justify-center min-h-[72vh] px-4 py-24 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm">
                Craft unforgettable journeys across India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Explore India with{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
                Wonder Weave
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 max-w-[720px] text-lg sm:text-xl text-white/90"
            >
              From the serene valleys of Kashmir to the vibrant streets of
              Jaipur, weave your perfect itinerary with ease.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <GradientButton>
                Plan Your Trip
                <ChevronRight className="ml-2 h-4 w-4" />
              </GradientButton>
              <Button
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/15"
              >
                Explore Destinations
              </Button>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 rounded-2xl bg-white/10 px-6 py-4 text-sm ring-1 ring-white/20 backdrop-blur">
              <HeroStat
                icon={<Mountain className="h-4 w-4" />}
                label="Destinations"
                value="150+"
              />
              <HeroStat
                icon={<Calendar className="h-4 w-4" />}
                label="Itineraries"
                value="3k+"
              />
              <HeroStat
                icon={<Globe2 className="h-4 w-4" />}
                label="Travelers"
                value="25k+"
              />
            </div>
          </div>
        </section>

{/* ---------------------------------destinations--------------------------------- */}
        <section id="destinations" className="py-20 bg-slate-50 dark:bg-white">
          <div className="container px-4">
            <HeaderBlock
              eyebrow="Top Picks"
              title="Popular Destinations"
              subtitle="Discover the most enchanting places across India, from serene backwaters to majestic mountains."
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {destinations.map((destination, i) => (
                <DestinationCard key={i} destination={destination} />
              ))}
            </div>
          </div>
        </section>

{/* -----------------------------------features--------------------------------- */}
        <section id="features" className="py-20">
          <div className="container px-4">
            <HeaderBlock
              eyebrow="Why Choose Us"
              title="Made for Memorable Journeys"
              subtitle="Everything you need to plan, personalize, and experience the best of India."
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="group relative overflow-hidden rounded-xl border bg-white dark:bg-white dark:border-slate-800 p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-full w-full bg-gradient-to-br from-orange-50 via-rose-50 to-emerald-50" />
                  </div>
                  <div className="relative">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-orange-100 via-pink-100 to-emerald-100 p-3 text-orange-600 ring-1 ring-orange-200/60">
                      {<f.icon />}
                    </div>
                    <h3 className="text-xl font-bold">{f.title}</h3>
                    <p className="mt-2 text-muted-foreground">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

                <section className="py-16 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-600 text-white relative overflow-hidden">
          <div className="absolute inset-y-0 -right-10 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="container px-4 text-center relative">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6"
            >
              Ready to Begin Your Indian Adventure?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="max-w-[720px] mx-auto text-white/90 mb-8 text-lg"
            >
              Join thousands of travelers discovering the wonders of India with personalized itineraries.
            </motion.p>
            <GradientButton>Start Planning Today</GradientButton>
          </div>
        </section>
        </main>

{/* ----------------------------------Footer---------------------------------- */}
     <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="h-6 w-6 text-orange-400" />
                <span className="text-xl font-bold">Wonder Weave</span>
              </div>
              <p className="text-slate-400 mb-4">
                Crafting unforgettable journeys across the vibrant tapestry of India.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
      to="#"
      className="text-slate-400 hover:text-orange-400 transition-colors"
      aria-label="Instagram"
    >
      <FaInstagram className="h-5 w-5" />
    </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#destinations" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="#features" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#about" className="text-slate-400 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#contact" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Popular Destinations</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Rajasthan
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Kerala
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Goa
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Ladakh
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                    Varanasi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-slate-400">
                <p>123 Travel Street</p>
                <p>New Delhi, India</p>
                <p className="mt-2">info@wonderweave.com</p>
                <p>+91 1234567890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Wonder Weave. All rights reserved.</p>
          </div>
        </div>
      </footer>

      
    </div>
  );
}