interface IGithubUser {
  login: string;
  avatar_url: string;
}

interface IGithubComment {
  id: string;
  body: string;
  created_at: string;
  updated_at: string;
  user: IGithubUser;
}

interface IGithubIssue {
  number: string;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export type { IGithubComment, IGithubIssue, IGithubUser };
