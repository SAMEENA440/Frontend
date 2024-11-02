// src/Components/BlogFormModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const BlogFormModal = ({ showModal, handleClose, handleSubmit, formData, setFormData, editPost }) => (
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
);

export default BlogFormModal;
