import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">Dr. Malik, MD</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-blue-500 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-600">Book Now</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Dr. Malik Cardiology. All rights reserved.
      </footer>
    </div>
  );
}
