"use client";
import { useState, useEffect } from "react";
const SingleBlogHelper = ({ id }) => {
  const [blogs, setBlogs] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/getblogs/${id}`, {
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
        <div className="flex flex-col justify-center gap-4 mt-6">
          <h2 className="text-2xl text-center">{blogs?.title}</h2>
          <p className="text-xl text-center ">{blogs?.content}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogHelper;
