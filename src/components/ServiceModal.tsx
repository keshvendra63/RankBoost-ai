
import React from 'react';
import { X } from 'lucide-react';
import ServiceForm from './ServiceForm';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  serviceName: string;
}

const ServiceModal = ({ isOpen, onClose, serviceId, serviceName }: ServiceModalProps) => {
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
          <h3 className="text-xl font-bold">Request {serviceName} Service</h3>
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
            Fill out the form below and our team will get back to you with a custom quote for your project.
          </p>
          
          <ServiceForm 
            serviceId={serviceId} 
            serviceName={serviceName} 
            onSuccess={handleSuccess} 
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
