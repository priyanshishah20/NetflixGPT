export const checkValidData = (fname, email, password, isSignUp) => {
    
    if(isSignUp) {
        const isNameValid = /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(fname);
        // two words for fullname
        if(!isNameValid) {
            return 'Name is not valid';
        }
    }
    
    // return true or false 
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=\S+$).{8,20}$/.test(password);
    
    
    if(!isEmailValid) {
        return 'Email is not valid';
    }
    if(!isPasswordValid) {
        return 'Password must be at least 8 characters long and contain at least one uppercase, lowercase letter, one number, one special charac and no whitespace';
    }

    return null; // valid data
}

export const getAuthErrorMessage = (errorCode, isSignUp) => {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'Account does not exist. Please sign up first.';

    case 'auth/invalid-credential':
      return 'Invalid email or password. If you are new, please sign up first.';

    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';

    case 'auth/email-already-in-use':
      return 'This email is already registered. Please sign in.';

    case 'auth/invalid-email':
      return 'Invalid email address.';

    case 'auth/weak-password':
      return 'Password is too weak.';

    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.';

    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';

    default:
      return 'Something went wrong. Please try again.';
  }
};
