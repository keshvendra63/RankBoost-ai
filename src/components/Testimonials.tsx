
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Design Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    text: "The team at RankBoost Ai completely transformed our online presence. Their attention to detail and creative approach exceeded our expectations. They were responsive, professional, and delivered exactly what we needed.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Course Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    text: "Taking the React Development course at RankBoost Ai was the best career decision I've made. The curriculum was comprehensive and the instructors were incredibly knowledgeable. I landed a developer job within two months of completing the course!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "SEO Services Client",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150",
    text: "We saw a 200% increase in organic traffic after implementing RankBoost Ai' SEO strategy. Their team was transparent about the process and kept us updated with detailed monthly reports. Highly recommend their services!",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Graphic Design Client",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    text: "The branding package we received from RankBoost Ai perfectly captured our company's vision. Their designers were attentive to our needs and delivered a versatile brand identity that works across all of our marketing materials.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);
  
  const goToPrevious = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonials slider */}
      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="w-full flex-shrink-0 px-4"
            >
              <div className="glass-card rounded-xl p-8 flex flex-col items-center md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'stroke-current'}`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>
                  
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">{testimonial.name}</span>
                    <span className="text-kudevs-gray-800">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="text-kudevs-blue w-6 h-6" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="text-kudevs-blue w-6 h-6" />
      </button>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoplay(false);
              setActiveIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-kudevs-blue scale-125' : 'bg-kudevs-gray-200'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
