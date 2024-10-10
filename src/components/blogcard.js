import React from 'react';

function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.content.substring(0, 100)}...</p>
        <p className="text-sm text-gray-500">By {blog.author}</p>
      </div>
    </div>
  );
}

export default BlogCard;