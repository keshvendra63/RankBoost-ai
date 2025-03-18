import {Button} from './ui/button/Button';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Paintbrush, TrendingUp, Clock, Users, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/Dialog";
import CourseForm from './CourseForm';
import toast from 'react-hot-toast';

// No direct equivalent of TypeScript interfaces in JavaScript, but we can define a constructor function or a class to represent the structure.

const Course=(id, title, icon, color, description, duration, students, features, price)=> {
    id = id;
    title = title;
    icon = icon; // Note: React.ReactNode is specific to React, you may need to handle this differently in JavaScript
    color = color;
    description = description;
    duration = duration;
    students = students;
    features = features; // This will be an array in JavaScript
    price = price;
  }
  
  

const Courses = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(Course || null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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

  const openCourseDialog = (course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const courses = [
    {
      id: "web-dev",
      title: "Web Development Masterclass",
      icon: <Code size={24} className='kudevs-blue'/>,
      color: "blue",
      description: "Comprehensive course covering HTML, CSS, JavaScript, React, and Node.js for building modern web applications.",
      duration: "12 weeks",
      students: "2,500+",
      features: [
        "HTML5, CSS3 & JavaScript fundamentals",
        "React & Next.js frontend development",
        "Node.js & Express backend development",
        "MongoDB database integration",
        "RESTful API design",
        "Authentication & authorization",
        "Responsive web design principles",
        "Deploying applications to the cloud"
      ],
      price: "₹14,999"
    },
    {
      id: "graphic-design",
      title: "Graphic Design Essentials",
      icon: <Paintbrush size={24} className='kudevs-purple'/>,
      color: "purple",
      description: "Learn the principles of graphic design and master industry-standard tools like Adobe Photoshop, Illustrator, and Figma.",
      duration: "8 weeks",
      students: "1,800+",
      features: [
        "Design principles & color theory",
        "Typography & layout fundamentals",
        "Adobe Photoshop & Illustrator",
        "UI/UX design best practices",
        "Logo & brand identity design",
        "Print & digital media design",
        "Portfolio development",
        "Client communication skills"
      ],
      price: "₹12,499"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Strategy",
      icon: <TrendingUp size={24} className='kudevs-teal'/>,
      color: "teal",
      description: "Master the strategies and tools for effective digital marketing, including SEO, social media, content marketing, and analytics.",
      duration: "10 weeks",
      students: "2,200+",
      features: [
        "SEO & SEM fundamentals",
        "Social media marketing strategies",
        "Content marketing & copywriting",
        "Email marketing campaigns",
        "Google Analytics & data analysis",
        "Paid advertising (Google & Meta Ads)",
        "Conversion optimization",
        "Marketing automation tools"
      ],
      price: "₹13,499"
    }
  ];

  return (
    <div id="courses" ref={sectionRef} className="courses-section">
      {/* Background elements */}
      <div className="background-gradient"></div>
      <div className="background-circle blue-circle"></div>
      <div className="background-circle purple-circle"></div>
      
      <div className="container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Courses</p>
          <h2 className={`main-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Elevate Your Skills with Our <span className="gradient-text">Premium Courses</span>
          </h2>
          <p className={`section-description ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Learn from industry experts and master the skills needed to excel in today's digital landscape. Our courses combine theory with practical, hands-on projects.
          </p>
        </div>
        
        <div className="course-grid">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`course-card ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className={`course-header bg-kudevs-${course.color}`}>
                <div className={`icon-container bg-kudevs-${course.color}/20 kudevs-${course.color}`}>
                  {course.icon}
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>
              </div>
              
              <div className="course-footer">
                <div className="course-learn">
                  <h4 className="learn-title">What you'll learn:</h4>
                  <ul className="learn-list">
                    {course.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="learn-item">
                        <CheckCircle2 size={18} className={`kudevs-${course.color}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="course-price">
                 <div>
                 <span className="price-label">Course Fee</span>
                 <p className="price-value">{course.price}</p>
                 </div>
                 <Button 
                  onClick={() => openCourseDialog(course)}
                  className={`enroll-button kudevs-bg-${course.color}`}
                >
                  Enroll Now
                </Button>
                
                </div>
               
                <Button 
                  variant="link" 
                  className={`view-curriculum-button kudevs-${course.color} hover:kudevs-${course.color}/80`}
                  onClick={() => openCourseDialog(course)}
                >
                  View Full Curriculum
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Course Enrollment Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="dialog-content">
          <DialogHeader>
            <DialogTitle className="dialog-title">
              {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription>
              Fill out this form to enroll in our course.
            </DialogDescription>
          </DialogHeader>
          
          {selectedCourse && (
            <div className="dialog-details">
              <div className="dialog-course-card">
                <h4 className="course-title">Course Details:</h4>
                <p className="course-description">{selectedCourse.description}</p>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{selectedCourse.students} students</span>
                  </div>
                </div>
                
                <div className="course-price1">
                  <span className="price-label">Course Fee</span>
                  <p className="price-value">{selectedCourse.price}</p>
                </div>
              </div>
              
              <div className="course-learn">
                <h4 className="learn-title">What you'll learn:</h4>
                <ul className="learn-list">
                  {selectedCourse.features.map((feature, i) => (
                    <li key={i} className="learn-item">
                      <CheckCircle2 size={18} className={`kudevs-${selectedCourse.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="dialog-form">
                <CourseForm 
                  courseId={selectedCourse.id} 
                  courseName={selectedCourse.title} 
                  onSuccess={() => {
                    setIsDialogOpen(false);
                    toast.success("Enrollment successful! We'll contact you shortly with more details.");
                  }}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Courses;