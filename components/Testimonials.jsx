import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

/**
 * @typedef {Object} Testimonial
 * @property {number} id
 * @property {string} name
 * @property {string} role
 * @property {string} image
 * @property {string} text
 * @property {number} rating
 */

// The testimonials array with type annotations removed for plain JavaScript
const testimonials = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "Web Design Client",
    image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    text: "The team at RankBoostUK completely transformed our online presence. Their attention to detail and creative approach exceeded our expectations. They were responsive, professional, and delivered exactly what we needed.",
    rating: 5
  },
  {
    id: 2,
    name: "Manisha Garg",
    role: "Course Student",
    image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    text: "Taking the React Development course at RankBoostUK was the best career decision I've made. The curriculum was comprehensive and the instructors were incredibly knowledgeable. I landed a developer job within two months of completing the course!",
    rating: 5
  },
  {
    id: 3,
    name: "Sindhu",
    role: "SEO Services Client",
    image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    text: "We saw a 200% increase in organic traffic after implementing RankBoostUK' SEO strategy. Their team was transparent about the process and kept us updated with detailed monthly reports. Highly recommend their services!",
    rating: 4
  },
  {
    id: 4,
    name: "Surbhi Singh",
    role: "Graphic Design Client",
    image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    text: "The branding package we received from RankBoostUK perfectly captured our company's vision. Their designers were attentive to our needs and delivered a versatile brand identity that works across all of our marketing materials.",
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
    <div className="testimonial-container">
      {/* Testimonials slider */}
      <div className="testimonial-slider">
        <div 
          className="testimonial-slider-inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-slide"
            >
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="testimonial-image"
                  />
                </div>
                
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`rating-star ${i < testimonial.rating ? 'filled' : ''}`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="testimonial-text">"{testimonial.text}"</blockquote>
                  
                  <div className="testimonial-author">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
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
        className="nav-button left-button"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="nav-icon" />
      </button>
      
      <button 
        onClick={goToNext}
        className="nav-button right-button"
        aria-label="Next testimonial"
      >
        <ChevronRight className="nav-icon" />
      </button>
      
      {/* Indicators */}
      <div className="indicator-container">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoplay(false);
              setActiveIndex(index);
            }}
            className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;