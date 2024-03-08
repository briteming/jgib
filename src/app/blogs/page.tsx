import BlogList from "./components/BlogList";
import OauthCallbackWrapper from "./components/OauthCallbackWrapper";

export default function Page() {
  return (
    <div>
      <h1>My Blog</h1>
      <OauthCallbackWrapper>
        <BlogList />
      </OauthCallbackWrapper>
    </div>
  );
}
