import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers:{'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`}
});

//Replace to your Git Hub username and repository here:

export const UserGitHub = "prattiz";
export const UserRepos = "git-blog"