import { repoName, userName } from "./commons";

export const gitHubIssuesUrl = `https://api.github.com/repos/${userName}/${repoName}/issues`;
export const gitHubOauthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=public_repo`;
export const gitHubTokenUrl = `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=`;
export const gitHubUserUrl = `https://api.github.com/user`;
export const gitHubAuthorUrl = `https://api.github.com/users/${userName}`;
