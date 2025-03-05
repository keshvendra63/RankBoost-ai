
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Paintbrush, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    <div 
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, rgba(247,249,255,1) 0%, rgba(233,243,255,1) 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-kudevs-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-kudevs-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-kudevs-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <span className="inline-block py-1 px-3 rounded-full bg-kudevs-blue/10 text-kudevs-blue font-medium text-sm mb-4 animate-fade-in-up opacity-0">
              The Creative Tech Hub
            </span>
            <h1 className="font-bold leading-tight mb-6 animate-fade-in-up opacity-0">
              Transform Your Digital <span className="gradient-text">Vision</span> Into Reality
            </h1>
            <p className="text-lg text-kudevs-gray-800 mb-8 max-w-xl animate-fade-in-up opacity-0">
              We're a team of passionate developers, designers, and marketers creating exceptional digital experiences for businesses and individuals alike.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up opacity-0">
              <Button onClick={scrollToContact} className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="btn-secondary">
                Explore Services
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up opacity-0">
              {[
                { icon: <Code className="text-kudevs-blue" size={24} />, text: "Web Development" },
                { icon: <Paintbrush className="text-kudevs-purple" size={24} />, text: "Graphic Design" },
                { icon: <TrendingUp className="text-kudevs-teal" size={24} />, text: "Digital Marketing" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm">
                  {item.icon}
                  <span className="mt-2 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in opacity-0">
            <div className="relative z-10 w-full h-full flex justify-center items-center">
              <div className="w-[480px] h-[480px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-kudevs-blue to-kudevs-purple rounded-full opacity-20 animate-pulse-subtle"></div>
                <div className="absolute inset-4 bg-white backdrop-blur-xl rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                    alt="Development Team"
                    className="w-full h-full object-cover rounded-full p-2"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 glass-card rounded-lg p-3 shadow-lg animate-float">
                  <Code size={28} className="text-kudevs-blue" />
                </div>
                <div className="absolute -bottom-6 left-10 glass-card rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <Paintbrush size={28} className="text-kudevs-purple" />
                </div>
                <div className="absolute top-1/4 -left-10 glass-card rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                  <TrendingUp size={28} className="text-kudevs-teal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
