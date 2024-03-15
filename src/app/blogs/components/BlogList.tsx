"use client";
import getBlogList from "@/api/getBlogList";
import { BlogType } from "@/types/blogType";
import { useCallback, useEffect, useRef, useState } from "react";
import BlogBlock from "./BlogBlock";

type propsType = {
  isAuthor: boolean;
  initialBlogList: BlogType[];
};

export default function BlogList({ isAuthor, initialBlogList }: propsType) {
  const [blogList, setBlogList] = useState(initialBlogList);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(1);
  const lastDivRef = useRef(null);
  const previousBlogRef = useRef<BlogType[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMoreContent = useCallback(async () => {
    pageRef.current += 1;
    console.log("load more pages:" + pageRef.current);

    const moreBlogList = await getBlogList(pageRef.current);

    if (moreBlogList.length === 0) {
      setHasMore(false);
      // prevent continue to observe
      observerRef.current?.disconnect();
      return;
    }

    setBlogList((prev) => [...prev, ...moreBlogList]);
  }, []);

  useEffect(() => {
    if (!lastDivRef.current) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    if (blogList.length !== previousBlogRef.current.length) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target === lastDivRef.current &&
            hasMore
          ) {
            loadMoreContent();
          }
        });
      }, options);

      observerRef.current.observe(lastDivRef.current);

      previousBlogRef.current === blogList;
    }
    return () => {
      observerRef.current?.disconnect();
    };
  }, [loadMoreContent, hasMore, blogList]);

  // reset blogList when initialBlogList is changed
  useEffect(() => {
    setBlogList(initialBlogList);
  }, [initialBlogList]);

  return (
    <div>
      {blogList.map((blogItem: BlogType, index) => {
        return (
          <BlogBlock
            key={blogItem.id}
            blogItem={blogItem}
            isAuthor={isAuthor}
            ref={index === blogList.length - 1 ? lastDivRef : null}
          />
        );
      })}
      {hasMore ? <span>...loading</span> : <span>...No more</span>}
    </div>
  );
}
