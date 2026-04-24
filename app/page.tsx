import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import AmbientBackground from '@/components/AmbientBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}
