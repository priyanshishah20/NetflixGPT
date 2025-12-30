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