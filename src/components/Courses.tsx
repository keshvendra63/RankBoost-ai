
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Paintbrush, TrendingUp, Clock, Users, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import CourseForm from './CourseForm';
import { toast } from 'sonner';

interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  duration: string;
  students: string;
  features: string[];
  price: string;
}

const Courses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
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

  const openCourseDialog = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const courses: Course[] = [
    {
      id: "web-dev",
      title: "Web Development Masterclass",
      icon: <Code size={24} />,
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
      icon: <Paintbrush size={24} />,
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
      icon: <TrendingUp size={24} />,
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
    <div id="courses" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-kudevs-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-kudevs-purple/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Courses</p>
          <h2 className={`font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Elevate Your Skills with Our <span className="gradient-text">Premium Courses</span>
          </h2>
          <p className={`text-kudevs-gray-800 max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Learn from industry experts and master the skills needed to excel in today's digital landscape. Our courses combine theory with practical, hands-on projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg card-hover border border-gray-100 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} 
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className={`bg-kudevs-${course.color}/10 p-6`}>
                <div className={`w-12 h-12 rounded-lg bg-kudevs-${course.color}/20 text-kudevs-${course.color} flex items-center justify-center mb-4`}>
                  {course.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                <p className="text-kudevs-gray-800 mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-kudevs-gray-800">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-medium text-lg mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className={`text-kudevs-${course.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-sm text-kudevs-gray-800">Course Fee</span>
                    <p className="text-2xl font-bold">{course.price}</p>
                  </div>
                  <Button 
                    onClick={() => openCourseDialog(course)}
                    className={`bg-kudevs-${course.color} hover:bg-kudevs-${course.color}/90 text-white`}
                  >
                    Enroll Now
                  </Button>
                </div>
                
                <Button 
                  variant="link" 
                  className={`px-0 text-kudevs-${course.color} hover:text-kudevs-${course.color}/80 w-full justify-start`}
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
        <DialogContent className="max-w-3xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription>
              Fill out this form to enroll in our course.
            </DialogDescription>
          </DialogHeader>
          
          {selectedCourse && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-6">
                  <h4 className="font-medium text-lg mb-3">Course Details:</h4>
                  <p className="text-sm text-kudevs-gray-800 mb-4">{selectedCourse.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-kudevs-gray-800 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{selectedCourse.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{selectedCourse.students} students</span>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold mb-4">
                    {selectedCourse.price}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {selectedCourse.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className={`text-kudevs-${selectedCourse.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
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
