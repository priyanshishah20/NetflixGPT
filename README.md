1. Authentication
    - Protected Routers
2. Form handling

NetflixGPT
we will use gpt api to search movies

## Features
Login/SignUp
 - Signup form
 - Redirect to browse page

LoggedIn
 - Browse (after authentication)
    - Header
    - Main movie
        - Trailer in bg
        - Title & desc along with play button
        - Movie suggestion
            - Movie lists * N

NetflixGPT
 - Search bar
 - Movie suggestions


# Two ways to handle form
- using state variable
- using useRef

# firebase.google.com - most of the startups use as backend
firebase for building authentication

# firebase hosting
firebase deploy - command
first you need to select the plan as blaze on firebase, then only hosting will work
# https://firebase.google.com/pricing?authuser=0&_gl=1*5awgrj*_ga*MjAzMjY4ODAwMC4xNzY3MDIyNjIy*_ga_CW55HF8NVT*czE3NjcwMjI2MjIkbzEkZzEkdDE3NjcwMjkyMDYkajM0JGwwJGgw


# Redux Store
useDispatch - to store on redux
useSelector - to get stored value from redux

# Important: .env.local Encoding Issue (Windows Users)

If environment variables are not loading (e.g. import.meta.env.VITE_* is undefined) even though the file and variable names are correct, check the file encoding of your .env / .env.local file.

❗ Root Cause

On Windows, editors like Notepad or sometimes VS Code may save .env.local files in UTF-16 encoding by default.

Vite (and most Node.js tools) only correctly parse .env files saved in UTF-8.
When the file is UTF-16, hidden characters (BOM) are added, causing Vite to silently ignore the variables.

# Solution (Required)
Ensure your .env / .env.local file is saved in UTF-8 encoding.

In VS Code:
Open .env or .env.local
Look at the bottom-right status bar (Encoding)
Click it → select UTF-8
Save the file
Restart the dev server: npm run dev

# Correct .env.local example
VITE_FIREBASE_API_KEY=your_api_key_here

No quotes, export, extra spaces and UTF-8 encoding only
