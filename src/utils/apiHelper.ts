import { BlogType, CommentType } from "@/types/blogType";
import { IGithubComment, IGithubIssue, IGithubUser } from "@/types/githubType";
import { UserType } from "@/types/userType";
import { getFormattedDate } from "./dateHelper";

export const getGitHubApiHeader = (token: string) => {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
};

export const getFormattedBlog = (data: IGithubIssue): BlogType => {
  const { number, title, body, created_at, updated_at } = data;
  return {
    id: number.toString(),
    title,
    body,
    createdAt: created_at,
    updatedAt: updated_at,
  };
};

export const getFormattedUser = (data: IGithubUser): UserType => {
  const { login, avatar_url } = data;
  return {
    name: login,
    avatarUrl: avatar_url,
  };
};

export const getFormattedComment = (data: IGithubComment): CommentType => {
  const { id, body, created_at, updated_at, user } = data;
  return {
    id: id.toString(),
    body,
    createdAt: getFormattedDate(created_at),
    updatedAt: getFormattedDate(updated_at),
    user: {
      name: user.login,
      avatarUrl: user.avatar_url,
    },
  };
};
