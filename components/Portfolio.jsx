import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button/Button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "./ui/Dialog"
import { Tabs, TabsList, TabsTrigger } from "./ui/Tabs"
import { ExternalLink, Code, Paintbrush, TrendingUp } from "lucide-react"

const Portfolio = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      id: "p1",
      title: "E-commerce Platform",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      description:
        "A complete e-commerce solution with customer and admin portals, payment processing, and inventory management.",
      clientName: "FashionRetail Ltd.",
      challenge:
        "The client needed a modern e-commerce platform to replace their legacy system, with improved user experience and backend management tools.",
      solution:
        "We developed a custom React-based frontend with a Node.js backend, implementing secure payment processing, real-time inventory updates, and a comprehensive admin dashboard.",
      results:
        "50% increase in conversion rates, 30% reduction in cart abandonment, and significantly improved inventory management efficiency.",
      projectUrl: "https://example.com/project1"
    },
    {
      id: "p2",
      title: "Corporate Rebrand",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Branding", "Logo Design", "Style Guide", "Print Materials"],
      description:
        "Complete corporate rebranding including logo design, brand guidelines, and marketing materials.",
      clientName: "TechSolutions Inc.",
      challenge:
        "The client's brand image had become outdated and didn't reflect their innovative technology solutions.",
      solution:
        "We crafted a modern brand identity with a dynamic logo system, comprehensive style guide, and templates for all marketing materials.",
      results:
        "The new brand identity led to improved market perception, with post-rebrand surveys showing a 45% increase in perceived innovation and professionalism."
    },
    {
      id: "p3",
      title: "SEO & Content Strategy",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tags: ["SEO", "Content Marketing", "Analytics", "Social Media"],
      description:
        "Comprehensive digital marketing strategy focusing on organic search growth and content marketing.",
      clientName: "HealthWellness Co.",
      challenge:
        "Despite offering excellent services, the client struggled with low online visibility and website traffic.",
      solution:
        "We implemented a multi-faceted SEO strategy, content calendar, and regular performance analysis to boost organic visibility.",
      results:
        "135% increase in organic traffic over 6 months, with first-page rankings for 28 target keywords and a 78% growth in lead generation."
    },
    {
      id: "p4",
      title: "Mobile Banking App",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tags: ["React Native", "Node.js", "Firebase", "FinTech"],
      description:
        "Secure and user-friendly mobile banking application with advanced features and biometric authentication.",
      clientName: "Regional Bank Ltd.",
      challenge:
        "The client needed to modernize their customer experience with a mobile app that maintained strict security standards.",
      solution:
        "We developed a React Native app with biometric authentication, real-time transaction monitoring, and integration with their legacy banking systems.",
      results:
        "85% adoption rate among existing customers within 3 months, with a 40% reduction in call center volume for routine transactions."
    },
    {
      id: "p5",
      title: "Product Packaging Design",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      tags: [
        "Packaging Design",
        "Product Design",
        "3D Modeling",
        "Print Production"
      ],
      description:
        "Eye-catching and functional packaging design for a premium food product line.",
      clientName: "Organic Foods Inc.",
      challenge:
        "The client was launching a premium product line that needed packaging to stand out on shelves while communicating quality and sustainability.",
      solution:
        "We designed distinctive packaging using eco-friendly materials, with vibrant graphics and clear information hierarchy.",
      results:
        "The product exceeded sales forecasts by 65% in the first quarter, with retailers requesting additional shelf space due to strong customer response."
    },
    {
      id: "p6",
      title: "Social Media Campaign",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      tags: [
        "Social Media",
        "Content Creation",
        "Influencer Marketing",
        "Analytics"
      ],
      description:
        "Multi-platform social media campaign to launch a new product to a young adult audience.",
      clientName: "Urban Apparel Co.",
      challenge:
        "The client needed to create buzz around their new clothing line targeting 18-25 year olds on a limited marketing budget.",
      solution:
        "We crafted a social-first strategy combining organic content, micro-influencer partnerships, and targeted paid promotion.",
      results:
        "Campaign hashtag generated over 100,000 user posts, with a 23% engagement rate and 250% ROI on marketing spend."
    }
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.category === filter)

  const openProjectDialog = project => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const getCategoryIcon = category => {
    switch (category) {
      case "web":
        return <Code size={16} className="kudevs-blue" />
      case "design":
        return <Paintbrush size={16} className="kudevs-purple" />
      case "marketing":
        return <TrendingUp size={16} className="kudevs-teal" />
    }
  }

  const getCategoryColor = category => {
    switch (category) {
      case "web":
        return "kudevs-blue bg-kudevs-blue"
      case "design":
        return "kudevs-purple bg-kudevs-purple"
      case "marketing":
        return "kudevs-teal bg-kudevs-teal"
    }
  }

  return (
    <div id="portfolio" ref={sectionRef} className="portfolio-section">
      <div className="container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Work</p>
          <h2 className={`font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Showcasing Our <span className="gradient-text">Creative Projects</span>
          </h2>
          <p className={`text-kudevs-gray-800 max-w-3xl mx-auto mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Browse through our portfolio of successful projects across web development, graphic design, and digital marketing.
          </p>
        </div>
        
        <div className="tabs-sec">
          <Tabs defaultValue="all" value={filter} onValueChange={(value) => setFilter(value)} className="tabs-container">
            <TabsList className="tabs-list">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="team-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${getCategoryColor(project.category)} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
              onClick={() => openProjectDialog(project)}
            >
              <div className="relative project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="category-badge">
                  {getCategoryIcon(project.category)}
                  <span className="capitalize">{project.category}</span>
                </div>
              </div>
              
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description line-clamp-2">{project.description}</p>
                
                <div className="tags-container">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="tag-badge">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tag-badge">+{project.tags.length - 3}</span>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  className="view-details-button"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="dialog-content">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`category-badge ${getCategoryColor(selectedProject.category)}`}>
                    {getCategoryIcon(selectedProject.category)}
                    <span className="capitalize">{selectedProject.category}</span>
                  </span>
                </div>
                <DialogTitle className="dialog-title">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="project-image-dialog">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="dialog-project-image"
                    />
                  </div>
                  
                  <div className="tags-container">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="tag-badge">{tag}</span>
                    ))}
                  </div>
                  
                  {selectedProject.projectUrl && (
                    <a 
                      href={selectedProject.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-url"
                    >
                      Visit Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                
                <div className="project-info">
                  <div>
                    <h3 className="info-title">About the Project</h3>
                    <p className="info-text">{selectedProject.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="info-title">Client</h3>
                    <p className="info-text">{selectedProject.clientName}</p>
                  </div>
                  
                  <div>
                    <h3 className="info-title">Challenge</h3>
                    <p className="info-text">{selectedProject.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="info-title">Solution</h3>
                    <p className="info-text">{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="info-title">Results</h3>
                    <p className="info-text">{selectedProject.results}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
