export const checkValidData = (fname, email, password) => {
    // return true or false 
    const isNameValid = /^[a-zA-Z]+( [a-zA-Z]+)+$/.test(fname);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=\S+$).{8,20}$/.test(password);
    
    // two words for name
    if(!isNameValid) {
        return 'Name is not valid';
    }
    if(!isEmailValid) {
        return 'Email is not valid';
    }
    if(!isPasswordValid) {
        return 'Password must be at least 8 characters long and contain at least one uppercase, lowercase letter, one number, one special charac and no whitespace';
    }

    return null; // valid data
}