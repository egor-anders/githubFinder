// https://api.github.com/users/graph1te


export interface LocalGithubUser {
  login: string;
  avatar: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  repos: number;
  followers: number;
  following: number;
  created: "2020-12-26T16:18:33Z";
}


export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: "2020-12-26T16:18:33Z";
}

export interface GithubError {
  message: string;
  documentation_url: string;
}
