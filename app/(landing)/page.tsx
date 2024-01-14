import { LandingNavbar } from "./components/landing-navbar";
import LandingHero from "./components/landing-hero";
import { LandingContent } from "./components/landing-content";

export default function Home() {
  return (
    <section className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </section>
  )
}
