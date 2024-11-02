// src/Components/HomePage.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import baliImage from '../assets/images/bali.webp';
import californiaImage from '../assets/images/california.webp';
import canadianImage from '../assets/images/canadian.webp';
import greeceImage from '../assets/images/greece.jpg';
import icelandImage from '../assets/images/iceland.jpeg';
import japanImage from '../assets/images/japan.jpeg';
import kenyaImage from '../assets/images/kenya.webp';
import newzealandImage from '../assets/images/newzealand.avif';
import parisImage from '../assets/images/paris.jpg';

import portugalImage from '../assets/images/portugal.webp';
import veniceImage from '../assets/images/venice.jpg';

// Initial travel posts data
const initialPosts = [
    { id: 1, title: "Exploring Bali", excerpt: "A tropical paradise with stunning beaches.", image: baliImage },
    { id: 2, title: "A Day in Paris", excerpt: "Discover the beauty of Paris in a day.", image: parisImage },
    { id: 3, title: "Safari in Kenya", excerpt: "Experience the rich wildlife on safari.", image: kenyaImage },
    { id: 4, title: "Cultural Trip to Japan", excerpt: "Discover the traditions and modern marvels of Japan.", image: japanImage },
    { id: 5, title: "Road Trip Through California", excerpt: "Exploring diverse landscapes across the state.", image: californiaImage },
    { id: 6, title: "Discovering Ancient Greece", excerpt: "Ancient ruins and beautiful islands await you.", image: greeceImage },
    { id: 7, title: "Adventures in New Zealand", excerpt: "Famous for stunning landscapes and green hills.", image: newzealandImage },
    { id: 8, title: "Exploring the Canadian Rockies", excerpt: "Majestic mountains and breathtaking lakes.", image: canadianImage },
    { id: 9, title: "Hidden Gems of Portugal", excerpt: "Discover the charm and culture of Portugal.", image: portugalImage },
    { id: 10, title: "Serenity in Iceland", excerpt: "Explore glaciers, geysers, and waterfalls.", image: icelandImage },
    { id: 11, title: "Venice: City of Canals", excerpt: "A romantic getaway among the canals of Venice.", image: veniceImage },
  ];
  

const HomePage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [formData, setFormData] = useState({ title: '', excerpt: '', image: '' });

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleShow = (post = null) => {
    setEditPost(post);
    setFormData(post ? { title: post.title, excerpt: post.excerpt, image: post.image } : { title: '', excerpt: '', image: '' });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPost) {
      setPosts(posts.map(post => post.id === editPost.id ? { ...editPost, ...formData } : post));
    } else {
      setPosts([...posts, { id: posts.length + 1, ...formData }]);
    }
    handleClose();
  };

  

  const handleDelete = (id) => setPosts(posts.filter(post => post.id !== id));

  return (
    <div className="home-page">
      <h1 className="home-page-title">Welcome to the Travel Blog</h1>
      <Button variant="success" onClick={() => handleShow()} className="add-blog-button">Add Blog</Button>

      <Slider {...settings} className="home-slider">
        {posts.map(post => (
          <div key={post.id} className="slider-item">
            <img src={post.image} alt={post.title} className="slider-image" />
            <div className="overlay">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="button-group">
                <Button as={Link} to={`/post/${post.id}`} variant="primary">Read More</Button>
                <Button variant="warning" onClick={() => handleShow(post)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Modal for adding/editing blog posts */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editPost ? 'Edit Blog' : 'Add Blog'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter blog title" 
                value={formData.title} 
                onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formExcerpt">
              <Form.Label>Excerpt</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter blog excerpt" 
                value={formData.excerpt} 
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter image URL" 
                value={formData.image} 
                onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editPost ? 'Update Blog' : 'Add Blog'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    
  );
};

export default HomePage;
