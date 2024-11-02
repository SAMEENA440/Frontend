// src/Components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css'; // Import styles if needed

const BlogList = () => {
  // Define travel posts
  const posts = [
    { id: 1, title: "Exploring Bali", content: "A tropical paradise with stunning beaches." },
    { id: 2, title: "A Day in Paris", content: "Discover the beauty of Paris in a day." },
    { id: 3, title: "Safari in Kenya", content: "Experience the rich wildlife on safari." },
    { id: 4, title: "Cultural Trip to Japan", content: "Discover the traditions and modern marvels of Japan." },
    { id: 5, title: "Road Trip Through California", content: "Exploring diverse landscapes across the state." },
    { id: 6, title: "Discovering Ancient Greece", content: "Ancient ruins and beautiful islands await you." },
    { id: 7, title: "Adventures in New Zealand", content: "Famous for stunning landscapes and green hills." },
    { id: 8, title: "Exploring the Canadian Rockies", content: "Majestic mountains and breathtaking lakes." },
    { id: 9, title: "Hidden Gems of Portugal", content: "Discover the charm and culture of Portugal." },
    { id: 10, title: "Serenity in Iceland", content: "Explore glaciers, geysers, and waterfalls." },
    { id: 11, title: "Venice: City of Canals", content: "A romantic getaway among the canals of Venice." },
  ];

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="blog-item">
          <h2>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;