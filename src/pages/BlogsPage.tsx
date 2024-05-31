// src/pages/BlogsPage.tsx
import React, { useEffect, useState } from 'react';

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/blogs.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4">
            <h2 className="text-2xl">{blog.title}</h2>
            <p>{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
