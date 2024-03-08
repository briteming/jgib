export interface UpdateBlogType {
  title: string;
  body: string;
}

export interface BlogType extends UpdateBlogType {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type BlogStatusType = {
  state: "open" | "closed";
};
