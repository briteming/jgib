import { UserType } from "./userType";

export interface UpdateBlogType {
  title: string;
  body: string;
}

export interface BlogType extends UpdateBlogType {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddBlogType extends UpdateBlogType {}

export interface CommentType {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  user: UserType;
}

export type BlogStatusType = {
  state: "open" | "closed";
};
