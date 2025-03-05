
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { Code, Paintbrush, TrendingUp, Layers, Globe, Database, PenTool, Palette, Image, BarChart3, LineChart, PieChart } from 'lucide-react';

const ServiceCard = ({ icon, title, description, delay = 0 }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
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
      className={`bg-white rounded-xl shadow-md overflow-hidden card-hover ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
    >
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-kudevs-blue/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-kudevs-gray-800 mb-4">{description}</p>
        <Button variant="link" className="px-0 text-kudevs-blue hover:text-kudevs-indigo">
          Learn more
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      icon: <Code className="text-kudevs-blue" size={24} />,
      title: "Frontend Development",
      description: "Modern, responsive websites using React, Next.js, and other cutting-edge technologies."
    },
    {
      icon: <Database className="text-kudevs-blue" size={24} />,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Express, MongoDB and other databases."
    },
    {
      icon: <Layers className="text-kudevs-blue" size={24} />,
      title: "Full Stack Solutions",
      description: "End-to-end web applications with seamless integration between frontend and backend."
    },
    {
      icon: <Globe className="text-kudevs-blue" size={24} />,
      title: "Website Maintenance",
      description: "Regular updates, security patches, and performance optimization for your web projects."
    }
  ];
  
  const designServices = [
    {
      icon: <PenTool className="text-kudevs-purple" size={24} />,
      title: "Brand Identity",
      description: "Distinctive logos and brand guidelines that capture your company's essence."
    },
    {
      icon: <Palette className="text-kudevs-purple" size={24} />,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing interfaces that enhance user experience."
    },
    {
      icon: <Image className="text-kudevs-purple" size={24} />,
      title: "Print Design",
      description: "Eye-catching marketing materials including brochures, business cards, and banners."
    },
    {
      icon: <Paintbrush className="text-kudevs-purple" size={24} />,
      title: "Illustration",
      description: "Custom digital artwork and illustrations that bring your ideas to life."
    }
  ];
  
  const marketingServices = [
    {
      icon: <BarChart3 className="text-kudevs-teal" size={24} />,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines."
    },
    {
      icon: <LineChart className="text-kudevs-teal" size={24} />,
      title: "Social Media Marketing",
      description: "Strategic campaigns to increase brand awareness and engagement across platforms."
    },
    {
      icon: <PieChart className="text-kudevs-teal" size={24} />,
      title: "Content Marketing",
      description: "Compelling content that resonates with your audience and drives conversions."
    },
    {
      icon: <TrendingUp className="text-kudevs-teal" size={24} />,
      title: "Digital Advertising",
      description: "Targeted ad campaigns on Google, Facebook, Instagram, and other platforms."
    }
  ];

  return (
    <div id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Expertise</p>
          <h2 className={`font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Comprehensive <span className="gradient-text">Services</span> We Offer
          </h2>
          <p className={`text-kudevs-gray-800 max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            From concept to completion, we provide end-to-end solutions to help businesses and individuals establish a strong digital presence.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Web Development Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-kudevs-blue/10 flex items-center justify-center">
                <Code className="text-kudevs-blue" size={20} />
              </div>
              <h3 className="font-semibold text-2xl">Web Development</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-kudevs-purple/10 flex items-center justify-center">
                <Paintbrush className="text-kudevs-purple" size={20} />
              </div>
              <h3 className="font-semibold text-2xl">Graphic Design</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-kudevs-teal/10 flex items-center justify-center">
                <TrendingUp className="text-kudevs-teal" size={20} />
              </div>
              <h3 className="font-semibold text-2xl">Digital Marketing</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        <div className="mt-16 text-center">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
