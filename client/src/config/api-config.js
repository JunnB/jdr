let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'jdr-api.herokuapp.com') {
  backendHost = 'https://jdr-api.herokuapp.com';
} else if('localhost') {
  backendHost = 'http://localhost:5000';
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8080';
}

export const API_ROOT = backendHost;
