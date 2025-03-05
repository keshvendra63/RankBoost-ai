
import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, Code, Paintbrush, TrendingUp } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'dev' | 'design' | 'marketing';
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

const Team = () => {
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
  
  const getCategoryIcon = (category: 'dev' | 'design' | 'marketing') => {
    switch(category) {
      case 'dev':
        return <Code size={16} className="text-kudevs-blue" />;
      case 'design':
        return <Paintbrush size={16} className="text-kudevs-purple" />;
      case 'marketing':
        return <TrendingUp size={16} className="text-kudevs-teal" />;
    }
  };
  
  const getCategoryColor = (category: 'dev' | 'design' | 'marketing') => {
    switch(category) {
      case 'dev':
        return 'border-kudevs-blue/20 bg-kudevs-blue/5';
      case 'design':
        return 'border-kudevs-purple/20 bg-kudevs-purple/5';
      case 'marketing':
        return 'border-kudevs-teal/20 bg-kudevs-teal/5';
    }
  };
  
  const team: TeamMember[] = [
    {
      id: "member1",
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
        email: "keshvendra@kudevs.com"
      }
    },
    {
      id: "member2",
      name: "Aisha Patel",
      role: "Creative Director",
      category: "design",
      bio: "Award-winning graphic designer with 7+ years of experience in brand identity, UI/UX design, and visual storytelling. Passionate about creating memorable brand experiences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["Brand Identity", "UI/UX Design", "Adobe Creative Suite", "Figma", "Illustration", "Typography"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "aisha@kudevs.com"
      }
    },
    {
      id: "member3",
      name: "Raj Sharma",
      role: "Digital Marketing Strategist",
      category: "marketing",
      bio: "Digital marketing specialist with expertise in SEO, social media marketing, and content strategy. Passionate about data-driven marketing and growth hacking.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["SEO", "Social Media Marketing", "Content Strategy", "Google Analytics", "PPC", "Email Marketing"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "raj@kudevs.com"
      }
    },
    {
      id: "member4",
      name: "Priya Gupta",
      role: "Frontend Developer",
      category: "dev",
      bio: "Frontend specialist with a keen eye for detail and passion for creating smooth, interactive user experiences. Loves working with modern JavaScript frameworks.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "TypeScript", "Redux"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        email: "priya@kudevs.com"
      }
    },
    {
      id: "member5",
      name: "Arjun Mehta",
      role: "UI/UX Designer",
      category: "design",
      bio: "User experience enthusiast who combines strong design principles with user psychology to create intuitive digital products that users love.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["UI Design", "UX Research", "Prototyping", "Wireframing", "Figma", "Adobe XD"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "arjun@kudevs.com"
      }
    },
    {
      id: "member6",
      name: "Neha Singh",
      role: "Content & SEO Specialist",
      category: "marketing",
      bio: "Content creator with a talent for SEO-optimized writing and storytelling. Turns complex ideas into engaging content that ranks well and converts.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      skills: ["Content Strategy", "SEO", "Copywriting", "Blog Management", "Keyword Research", "Analytics"],
      social: {
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
        email: "neha@kudevs.com"
      }
    }
  ];

  return (
    <div id="team" ref={sectionRef} className="py-20">
      <div className="section-container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Team</p>
          <h2 className={`font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Meet the <span className="gradient-text">Talent</span> Behind RankBoost Ai
          </h2>
          <p className={`text-kudevs-gray-800 max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Our diverse team of passionate professionals combines technical expertise with creative excellence to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={member.id}
              className={`overflow-hidden border-0 shadow-lg ${getCategoryColor(member.category)} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-md mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white mb-2">
                    {getCategoryIcon(member.category)}
                    <span>{member.role}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-kudevs-gray-800 mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium rounded-full bg-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 mt-2">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-kudevs-gray-800 hover:text-kudevs-blue transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-kudevs-gray-800 hover:text-kudevs-blue transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-kudevs-gray-800 hover:text-kudevs-blue transition-colors">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-kudevs-gray-800 hover:text-kudevs-blue transition-colors">
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
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
