import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import RevealWrapper from "@/components/RevealWrapper";

export default function Home() {
  return (
    <RevealWrapper>
      <div className="relative min-h-screen selection:bg-accent selection:text-background">
        <AnimatedBackground />
        <Header />
        <main>
          <div className="reveal-section is-visible">
            <Hero />
          </div>
          <div className="reveal-section">
            <About />
          </div>
          <div className="reveal-section">
            <Experience />
          </div>
          <div className="reveal-section">
            <Projects />
          </div>
          <div className="reveal-section">
            <Skills />
          </div>
          <div className="reveal-section">
            <Writing />
          </div>
          <div className="reveal-section">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </RevealWrapper>
  );
}
