// Form validation and submission utilities

interface FormData {
  [key: string]: string;
}

export async function submitFormToSheet(formData: FormData, formType: 'course' | 'service' | 'contact'): Promise<{ success: boolean; message: string }> {
  const url = 'https://script.google.com/macros/s/AKfycbwA7v_aGFETHuNDT2pmJOO5UYjCoDwUBRzBsehZW_bowFC7jkedGEraLV8aG7inWD_05A/exec'; // Replace with your Google Apps Script web app URL

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Thank you for your submission! We'll get back to you shortly."
      };
    } else {
      return {
        success: false,
        message: "There was an error submitting your form. Please try again."
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "There was an error submitting your form. Please try again."
    };
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone);
}