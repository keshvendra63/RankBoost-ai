import { Button } from './ui/button/Button';
import { ArrowRight, Code, Paintbrush, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={heroRef} className="hero">
      {/* Decorative elements */}
      <div className="decorative-element blue"></div>
      <div className="decorative-element purple"></div>
      <div className="decorative-element teal"></div>
      
      <div className="container">
        <div className="grid">
          <div className="stagger-animation">
            <span className="tag">
              The Creative Tech Hub
            </span>
            <h1 className="title">
              Transform Your Digital <span className="gradient-text" style={{fontWeight:700}}>Vision</span> Into Reality
            </h1>
            <p className="description">
              We're a team of passionate developers, designers, and marketers creating exceptional digital experiences for businesses and individuals alike.
            </p>
            
            <div className="button-group">
              <Button onClick={scrollToContact} className="get-started-btn">
                Get Started
                <ArrowRight className="arrow-icon" size={18} />
              </Button>
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="btn-secondary">
                Explore Services
              </Button>
            </div>
            
            <div className="icon-grid">
              {[
                { icon: <Code className="icon kudevs-blue" size={24} />, text: "Web Development" },
                { icon: <Paintbrush className="icon kudevs-purple" size={24} />, text: "Graphic Design" },
                { icon: <TrendingUp className="icon kudevs-teal" size={24} />, text: "Digital Marketing" }
              ].map((item, index) => (
                <div key={index} className="icon-card">
                  {item.icon}
                  <span className="icon-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="image-container">
            <div className="image-wrapper">
              <div className="background-gradient"></div>
              <div className="image-content">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                  alt="Development Team"
                  className="team-image"
                />
              </div>
              
              {/* Floating elements */}
              <div className="floating-icon float-code">
                <Code size={28} className="icon kudevs-blue" />
              </div>
              <div className="floating-icon float-paintbrush" style={{ animationDelay: "1s" }}>
                <Paintbrush size={28} className="icon kudevs-purple" />
              </div>
              <div className="floating-icon float-trending" style={{ animationDelay: "2s" }}>
                <TrendingUp size={28} className="icon kudevs-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;