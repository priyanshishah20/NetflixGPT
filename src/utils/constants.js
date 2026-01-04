// Netflix logo
export const logo = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

// User avatar
export const userAvatar = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

// login bg
export const bgUrl = 'https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_large.jpg';

// API options for fetching movie data
export const APIOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
  }
};

// movie image base URL
export const imageBaseURL = "https://image.tmdb.org/t/p/w500/";

// supported languages
export const supportedLanguages = [{identifier: 'en', name: 'English'}, 
  {identifier: 'hindi', name: 'Hindi'}, {identifier: 'spanish', name: 'Spanish'}];