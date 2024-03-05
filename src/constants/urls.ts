import { repoName, userName } from "./commons";

export const gitHubIssuesUrl = `https://api.github.com/repos/${userName}/${repoName}/issues`;
export const gitHubOauthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=public_repo`;
