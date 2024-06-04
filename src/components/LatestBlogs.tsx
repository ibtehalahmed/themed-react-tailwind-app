// src/components/LatestBlogs.tsx
import React, { useEffect, useState } from 'react';
import Card from './Card';

const LatestBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data.slice(0, 3))); // Show only the first 3 blogs
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl mb-6 text-center">Latest Blog Posts</h2>
      <div className="flex justify-center space-x-4">
        {blogs.map(blog => (
          <Card key={blog.id} title={blog.title} description={blog.summary} imageUrl={blog.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
