
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { validateEmail, validatePhone, submitFormToSheet } from '@/utils/formHandlers';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await submitFormToSheet(
        {
          ...formData,
          submittedAt: new Date().toISOString()
        },
        'contact'
      );
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you shortly.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="stagger-animation">
        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
        
        <p className="text-kudevs-gray-800 mb-8">
          Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-kudevs-blue/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-kudevs-blue" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-kudevs-gray-800">+91 9876543210</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-kudevs-blue/10 p-3 rounded-full">
              <Mail className="w-6 h-6 text-kudevs-blue" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-kudevs-gray-800">contact@kudevs.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-kudevs-blue/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-kudevs-blue" />
            </div>
            <div>
              <h4 className="font-medium">Address</h4>
              <p className="text-kudevs-gray-800">123 Tech Park, Sector 62, Noida, UP, India</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none ${
                  errors.name ? 'border-destructive' : 'border-kudevs-gray-200'
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none ${
                  errors.email ? 'border-destructive' : 'border-kudevs-gray-200'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none ${
                  errors.phone ? 'border-destructive' : 'border-kudevs-gray-200'
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none ${
                  errors.subject ? 'border-destructive' : 'border-kudevs-gray-200'
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none ${
                errors.message ? 'border-destructive' : 'border-kudevs-gray-200'
              }`}
              placeholder="Tell us what you need"
            ></textarea>
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
