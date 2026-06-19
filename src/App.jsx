import { useState, useEffect } from 'react';
import './index.css';
import SkeletonLoader from './components/Skeleton';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import ScholarImpact from './components/ScholarImpact';
import Publications from './components/Publications';
import PhD from './components/PhD';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Minimal scroll reveal — one IntersectionObserver for all .reveal elements
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('shown');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) return <SkeletonLoader />;

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Research /></div>
        <div className="reveal"><ScholarImpact /></div>
        <div className="reveal"><Publications /></div>
        <div className="reveal"><PhD /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
