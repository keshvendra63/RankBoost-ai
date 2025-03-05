
import React, { useState } from 'react';
import { submitFormToSheet, validateEmail, validatePhone } from '@/utils/formHandlers';
import { useToast } from '@/hooks/use-toast';

interface ServiceFormProps {
  serviceId: string;
  serviceName: string;
  onSuccess: () => void;
}

const ServiceForm = ({ serviceId, serviceName, onSuccess }: ServiceFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    requirements: ''
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
    
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Project requirements are required';
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
          serviceId,
          serviceName,
          submittedAt: new Date().toISOString()
        },
        'service'
      );
      
      if (result.success) {
        toast({
          title: "Service Request Submitted!",
          description: "Thank you for your interest. We'll contact you shortly to discuss your project.",
        });
        
        onSuccess();
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          requirements: ''
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <label htmlFor="company" className="block text-sm font-medium mb-1">Company/Organization</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-kudevs-gray-200 rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none"
            placeholder="Your company name"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-1">Budget Range</label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-kudevs-gray-200 rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none"
        >
          <option value="">Select your budget range</option>
          <option value="Less than $1,000">Less than $1,000</option>
          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
          <option value="$10,000 - $20,000">$10,000 - $20,000</option>
          <option value="$20,000+">$20,000+</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="requirements" className="block text-sm font-medium mb-1">Project Requirements*</label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-kudevs-blue focus:border-transparent outline-none ${
            errors.requirements ? 'border-destructive' : 'border-kudevs-gray-200'
          }`}
          placeholder="Describe your project requirements"
        ></textarea>
        {errors.requirements && <p className="text-destructive text-sm mt-1">{errors.requirements}</p>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Service Request'}
      </button>
      
      <p className="text-xs text-center text-kudevs-gray-800">
        By submitting this form, you agree to our terms and privacy policy.
        We'll contact you shortly with more information about our services.
      </p>
    </form>
  );
};

export default ServiceForm;
