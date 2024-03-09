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

export type BlogStatusType = {
  state: "open" | "closed";
};
