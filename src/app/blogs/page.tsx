import BlogList from "./components/BlogList";
import BlogListWrapper from "./components/BlogListWrapper";

export default function Page() {
  return (
    <BlogListWrapper>
      <BlogList />
    </BlogListWrapper>
  );
}
