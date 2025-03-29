
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="divider container" />
        <Projects />
        <div className="divider container" />
        <Blog />
        <div className="divider container" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
