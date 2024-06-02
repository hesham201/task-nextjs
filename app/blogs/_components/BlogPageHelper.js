"use client";
import { useEffect, useState } from "react";
import SingleBlogPost from "@/components/SingleBlogPost";

const BlogsPageHelper = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/getblogs", {
          method: "GET",
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-10">
      <div className="container">
        {blogs.map((item) => (
          <SingleBlogPost data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPageHelper;
