import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Features } from "../Components/Features";
import { HeroBanner } from "../Components/HeroBanner";
import { Destination } from "../Components/Destination";
import { Banner2 } from "../Components/Banner2";


/* ---------- Landing Page ---------- */
export default function LandingPage() {

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar />


      <main className="flex-1">
        <HeroBanner />
        <Destination />
        <Features />
        <Banner2 />    
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}