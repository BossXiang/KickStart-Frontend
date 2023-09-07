
// This is used to validate email
export const ValidateEmail = (email) => {
  // Regular expression pattern for a basic email validation
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Test the email against the pattern
  return emailPattern.test(email);
};



