import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: "1", title: "Exploring the Alps", content: "An unforgettable journey through the Alps..." },
  { id: "2", title: "A Day in Paris", content: "Discover the beauty of Paris in a day..." },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === id);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};

export default BlogPost;
