import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Card } from "./ui/Card";
import { Github, Linkedin, Twitter, Mail, Code, Paintbrush, TrendingUp } from 'lucide-react';

// The TeamMember interface has been removed as JavaScript does not have interfaces

const Team = () => {
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
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'dev':
        return <Code size={16} className="kudevs-blue" />;
      case 'design':
        return <Paintbrush size={16} className="kudevs-purple" />;
      case 'marketing':
        return <TrendingUp size={16} className="kudevs-teal" />;
    }
  };
  

  
  const team = [
    {
      id: "member1",
      color:"blue",
      name: "Keshvendra Upmanyu",
      role: "Founder & Lead Developer",
      category: "dev",
      bio: "B.Tech holder in Computer Science with expertise in MERN stack development. Passionate about creating scalable web applications and mentoring aspiring developers.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["React.js", "Next.js", "Node.js", "MongoDB", "JavaScript", "Python"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        twitter: "https://twitter.com/username",
        email: "rankboostuk@gmail.com"
      }
    },
    {
      id: "member2",
      color:"purple",
      name: "Aisha Patel",
      role: "Creative Director",
      category: "design",
      bio: "Award-winning graphic designer with 7+ years of experience in brand identity, UI/UX design, and visual storytelling. Passionate about creating memorable brand experiences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["Brand Identity", "UI/UX Design", "Adobe Creative Suite", "Figma", "Illustration", "Typography"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "rankboostuk@gmail.com"
      }
    },
    {
      id: "member3",
      color:"teal",
      name: "Raj Sharma",
      role: "Digital Marketing Strategist",
      category: "marketing",
      bio: "Digital marketing specialist with expertise in SEO, social media marketing, and content strategy. Passionate about data-driven marketing and growth hacking.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["SEO", "Social Media Marketing", "Content Strategy", "Google Analytics", "PPC", "Email Marketing"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "rankboostuk@gmail.com"
      }
    },
    {
      id: "member4",
      color:"blue",
      name: "Priya Gupta",
      role: "Frontend Developer",
      category: "dev",
      bio: "Frontend specialist with a keen eye for detail and passion for creating smooth, interactive user experiences. Loves working with modern JavaScript frameworks.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "TypeScript", "Redux"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        email: "rankboostuk@gmail.com"
      }
    },
    {
      id: "member5",
      color:"purple",
      name: "Arjun Mehta",
      role: "UI/UX Designer",
      category: "design",
      bio: "User experience enthusiast who combines strong design principles with user psychology to create intuitive digital products that users love.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["UI Design", "UX Research", "Prototyping", "Wireframing", "Figma", "Adobe XD"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "rankboostuk@gmail.com"
      }
    },
    {
      id: "member6",
      color:"teal",
      name: "Neha Singh",
      role: "Content & SEO Specialist",
      category: "marketing",
      bio: "Content creator with a talent for SEO-optimized writing and storytelling. Turns complex ideas into engaging content that ranks well and converts.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["Content Strategy", "SEO", "Copywriting", "Blog Management", "Keyword Research", "Analytics"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "rankboostuk@gmail.com"
      }
    }
  ];

  return (
    <div id="team" ref={sectionRef} className="team-section">
      <div className="container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Team</p>
          <h2 className={`main-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Meet the <span className="gradient-text">Talent</span> Behind RankBoostUK
          </h2>
          <p className={`section-description ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Our diverse team of passionate professionals combines technical expertise with creative excellence to deliver exceptional results.
          </p>
        </div>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <Card 
              key={member.id}
              className={`team-card bg-kudevs-${member.color} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className={`card-content`}>
                <Avatar className="avatar">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="category-badge1">
                  {getCategoryIcon(member.category)}
                  <span>{member.role}</span>
                </div>
                
                <h3 className="member-name">{member.name}</h3>
                <p className="member-bio">{member.bio}</p>
                
                <div className="skills-container">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
                
                <div className="social-links">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Github size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="social-icon">
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;