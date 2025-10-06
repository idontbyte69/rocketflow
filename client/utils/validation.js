// Form validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const validatePhoneNumber = (phone) => {
  // Basic phone number validation (international format)
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateName = (name) => {
  return name && name.trim().length >= 2;
};

// Form error messages
export const getErrorMessage = (field, value) => {
  switch (field) {
    case 'email':
      if (!validateRequired(value)) return 'Email is required';
      if (!validateEmail(value)) return 'Please enter a valid email address';
      return '';
    
    case 'password':
      if (!validateRequired(value)) return 'Password is required';
      if (!validatePassword(value)) {
        return 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
      }
      return '';
    
    case 'firstName':
    case 'lastName':
      if (!validateRequired(value)) return `${field === 'firstName' ? 'First' : 'Last'} name is required`;
      if (!validateName(value)) return `${field === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`;
      return '';
    
    case 'phone':
      if (!validateRequired(value)) return 'Phone number is required';
      if (!validatePhoneNumber(value)) return 'Please enter a valid phone number';
      return '';
    
    case 'confirmPassword':
      if (!validateRequired(value)) return 'Please confirm your password';
      return '';
    
    default:
      return '';
  }
};

// Validate entire form
export const validateForm = (formData, requiredFields = []) => {
  const errors = {};
  
  requiredFields.forEach(field => {
    const error = getErrorMessage(field, formData[field]);
    if (error) {
      errors[field] = error;
    }
  });

  // Special validation for password confirmation
  if (requiredFields.includes('confirmPassword') && formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};