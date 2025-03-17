import { Button } from './ui/button/Button';
import { useState, useEffect, useRef } from 'react';
import { Code, Paintbrush, TrendingUp, Layers, Globe, Database, PenTool, Palette, Image, BarChart3, LineChart, PieChart } from 'lucide-react';

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        },
        {
          threshold: 0.1
        }
      );
      
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
      
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, [delay]);
    
    return (
      <div 
        ref={cardRef}
        className={`service-card ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      >
        <div className="service-card-content">
          <div className="icon-container">
            {icon}
          </div>
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
          <Button variant="link" className="learn-more-button">
            Learn more
          </Button>
        </div>
      </div>
    );
  }
  
  

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const webDevServices = [
    {
      icon: <Code className="icon" size={24} />,
      title: "Frontend Development",
      description: "Modern, responsive websites using React, Next.js, and other cutting-edge technologies."
    },
    {
      icon: <Database className="icon" size={24} />,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Express, MongoDB and other databases."
    },
    {
      icon: <Layers className="icon" size={24} />,
      title: "Full Stack Solutions",
      description: "End-to-end web applications with seamless integration between frontend and backend."
    },
    {
      icon: <Globe className="icon" size={24} />,
      title: "Website Maintenance",
      description: "Regular updates, security patches, and performance optimization for your web projects."
    }
  ];
  
  const designServices = [
    {
      icon: <PenTool className="icon kudevs-purple" size={24} />,
      title: "Brand Identity",
      description: "Distinctive logos and brand guidelines that capture your company's essence."
    },
    {
      icon: <Palette className="icon kudevs-purple" size={24} />,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing interfaces that enhance user experience."
    },
    {
      icon: <Image className="icon kudevs-purple" size={24} />,
      title: "Print Design",
      description: "Eye-catching marketing materials including brochures, business cards, and banners."
    },
    {
      icon: <Paintbrush className="icon kudevs-purple" size={24} />,
      title: "Illustration",
      description: "Custom digital artwork and illustrations that bring your ideas to life."
    }
  ];
  
  const marketingServices = [
    {
      icon: <BarChart3 className="icon kudevs-teal" size={24} />,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines."
    },
    {
      icon: <LineChart className="icon kudevs-teal" size={24} />,
      title: "Social Media Marketing",
      description: "Strategic campaigns to increase brand awareness and engagement across platforms."
    },
    {
      icon: <PieChart className="icon kudevs-teal" size={24} />,
      title: "Content Marketing",
      description: "Compelling content that resonates with your audience and drives conversions."
    },
    {
      icon: <TrendingUp className="icon kudevs-teal" size={24} />,
      title: "Digital Advertising",
      description: "Targeted ad campaigns on Google, Facebook, Instagram, and other platforms."
    }
  ];

  return (
    <div id="services" ref={sectionRef} className="services-section">
      <div className="container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Expertise</p>
          <h2 className={`main-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Comprehensive <span className="gradient-text">Services</span> We Offer
          </h2>
          <p className={`section-description ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            From concept to completion, we provide end-to-end solutions to help businesses and individuals establish a strong digital presence.
          </p>
        </div>
        
        <div className="services-list">
          {/* Web Development Services */}
          <div>
            <div className="service-category">
              <div className="category-icon">
                <Code className="icon" size={20} />
              </div>
              <h3 className="category-title">Web Development</h3>
            </div>
            <div className="service-grid">
              {webDevServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          {/* Graphic Design Services */}
          <div>
            <div className="service-category">
              <div className="category-icon">
                <Paintbrush className="icon kudevs-purple" size={20} />
              </div>
              <h3 className="category-title">Graphic Design</h3>
            </div>
            <div className="service-grid">
              {designServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          {/* Digital Marketing Services */}
          <div>
            <div className="service-category">
              <div className="category-icon">
                <TrendingUp className="icon kudevs-teal" size={20} />
              </div>
              <h3 className="category-title">Digital Marketing</h3>
            </div>
            <div className="service-grid">
              {marketingServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary get-started-btn"
          >
            Discuss Your Project
          </Button>
          </div>
      </div>
    </div>
  );
};

export default Services;