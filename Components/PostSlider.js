// src/Components/PostSlider.js
import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostSlider = ({ posts, handleShow, handleDelete }) => {
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

  return (
    <Slider {...settings}>
      {posts.map(post => (
        <div key={post.id} className="slider-item">
          <div className="slider-image-container">
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid slider-image"
              style={{ height: '400px', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3 className="slider-title">{post.title}</h3>
                <p className="slider-excerpt">{post.excerpt}</p>
                <Button as={Link} to={`/post/${post.id}`} variant="primary" className="slider-button read-more-button">
                  Read More
                </Button>
                <Button variant="warning" onClick={() => handleShow(post)} className="slider-button edit-button">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(post.id)} className="slider-button delete-button">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PostSlider;
