
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Courses from '../components/Courses';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Reveal animation on scroll
  React.useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-kudevs-gray-50">
      <Navbar />
      <main>
        <Hero />
        
        <section id="services" className="section-container reveal">
          <div className="section-title">
            <h4 className="section-subtitle">WHAT WE OFFER</h4>
            <h2 className="gradient-text">Our Services</h2>
          </div>
          <Services />
        </section>
        
        <section id="courses" className="section-container bg-kudevs-gray-50 reveal">
          <div className="section-title">
            <h4 className="section-subtitle">LEARN WITH US</h4>
            <h2 className="gradient-text">Our Courses</h2>
          </div>
          <Courses />
        </section>
        
        <section id="portfolio" className="section-container reveal">
          <div className="section-title">
            <h4 className="section-subtitle">OUR WORK</h4>
            <h2 className="gradient-text">Portfolio</h2>
          </div>
          <Portfolio />
        </section>
        
        <section id="team" className="section-container bg-kudevs-gray-50 reveal">
          <div className="section-title">
            <h4 className="section-subtitle">MEET THE EXPERTS</h4>
            <h2 className="gradient-text">Our Team</h2>
          </div>
          <Team />
        </section>
        
        <section id="testimonials" className="section-container reveal">
          <div className="section-title">
            <h4 className="section-subtitle">WHAT THEY SAY</h4>
            <h2 className="gradient-text">Testimonials</h2>
          </div>
          <Testimonials />
        </section>
        
        <section id="contact" className="section-container bg-kudevs-gray-50 reveal">
          <div className="section-title">
            <h4 className="section-subtitle">GET IN TOUCH</h4>
            <h2 className="gradient-text">Contact Us</h2>
          </div>
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
