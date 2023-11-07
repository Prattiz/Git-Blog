import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/'
});

//Replace to your Git Hub username here:

export const UserGitHub = "prattiz";