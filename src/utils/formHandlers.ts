
// Form validation and submission utilities

interface FormData {
  [key: string]: string;
}

export async function submitFormToSheet(formData: FormData, formType: 'course' | 'service' | 'contact'): Promise<{ success: boolean; message: string }> {
  // In a real implementation, this would send data to a backend service
  // that handles the spreadsheet integration. For this example, we'll simulate a successful response
  
  console.log(`Submitting ${formType} form data:`, formData);
  
  // Simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Thank you for your submission! We'll get back to you shortly."
      });
    }, 1000);
  });
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone);
}
