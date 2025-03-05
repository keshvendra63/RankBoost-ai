
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitFormToSheet, validateEmail, validatePhone } from '@/utils/formHandlers';

interface CourseFormProps {
  courseId: string;
  courseName: string;
  onSuccess: () => void;
}

const CourseForm = ({ courseId, courseName, onSuccess }: CourseFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    if (!formData.education.trim()) {
      newErrors.education = 'Education background is required';
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
          courseId,
          courseName,
          submittedAt: new Date().toISOString()
        },
        'course'
      );
      
      if (result.success) {
        onSuccess();
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          education: '',
          experience: '',
          message: ''
        });
      } else {
        // Handle error
        console.error('Form submission failed:', result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
      </div>
      
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Your contact number"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
      </div>
      
      <div>
        <Label htmlFor="education">Educational Background *</Label>
        <Input
          id="education"
          name="education"
          placeholder="Your highest education qualification"
          value={formData.education}
          onChange={handleChange}
          className={errors.education ? 'border-destructive' : ''}
        />
        {errors.education && <p className="text-destructive text-sm mt-1">{errors.education}</p>}
      </div>
      
      <div>
        <Label htmlFor="experience">Relevant Experience</Label>
        <Input
          id="experience"
          name="experience"
          placeholder="Any relevant experience in this field"
          value={formData.experience}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <Label htmlFor="message">Why do you want to join this course?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us your goals for taking this course"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full btn-primary"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
      </Button>
      
      <p className="text-xs text-center text-kudevs-gray-800">
        By submitting this form, you agree to our terms and privacy policy.
        We'll contact you shortly with more details about the course.
      </p>
    </form>
  );
};

export default CourseForm;
