
import React from 'react';
import { X } from 'lucide-react';
import CourseForm from './CourseForm';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  courseName: string;
}

const CourseModal = ({ isOpen, onClose, courseId, courseName }: CourseModalProps) => {
  if (!isOpen) return null;
  
  const handleSuccess = () => {
    setTimeout(() => {
      onClose();
    }, 2000);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between">
          <h3 className="text-xl font-bold">Enroll in {courseName}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-kudevs-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="mb-6 text-kudevs-gray-800">
            Fill out the enrollment form below, and our team will contact you with more information about the course schedule and payment options.
          </p>
          
          <CourseForm 
            courseId={courseId} 
            courseName={courseName} 
            onSuccess={handleSuccess} 
          />
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
