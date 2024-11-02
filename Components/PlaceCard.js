// src/Components/PlaceCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import baliImage from '../assets/images/bali.webp';
import californiaImage from '../assets/images/california.webp';
import canadianImage from '../assets/images/canadian.webp'; // Fixed the extension from .wedp to .webp
import greeceImage from '../assets/images/greece.jpg';
import icelandImage from '../assets/images/iceland.jpeg';
import japanImage from '../assets/images/japan.jpeg';
import kenyaImage from '../assets/images/kenya.webp';
import mountainsImage from '../assets/images/mountains.png';
import newzealandImage from '../assets/images/newzealand.avif';
import parisImage from '../assets/images/paris.jpg';
import portugalImage from '../assets/images/portugal.webp';
import veniceImage from '../assets/images/venice.jpg';

const places = [
  {
    name: 'Bali',
    description: 'The island of paradise.',
    image: baliImage,
  },
  {
    name: 'California',
    description: 'The Golden State with diverse landscapes.',
    image: californiaImage,
  },
  {
    name: 'Canada',
    description: 'Known for its natural beauty and friendly people.',
    image: canadianImage,
  },
  {
    name: 'Greece',
    description: 'Famous for its ancient history and stunning islands.',
    image: greeceImage,
  },
  {
    name: 'Iceland',
    description: 'A land of fire and ice with breathtaking landscapes.',
    image: icelandImage,
  },
  {
    name: 'Japan',
    description: 'A blend of traditional and modern wonders.',
    image: japanImage,
  },
  {
    name: 'Kenya',
    description: 'Home to incredible wildlife and breathtaking safaris.',
    image: kenyaImage,
  },
  {
    name: 'Mountains',
    description: 'Majestic peaks and outdoor adventures await.',
    image: mountainsImage,
  },
  {
    name: 'New Zealand',
    description: 'Famous for its stunning landscapes and Maori culture.',
    image: newzealandImage,
  },
  {
    name: 'Paris',
    description: 'The city of lights and love.',
    image: parisImage,
  },
  {
    name: 'Portugal',
    description: 'Known for its rich culture and scenic landscapes.',
    image: portugalImage,
  },
  {
    name: 'Venice',
    description: 'Explore the beautiful canals of this historic city.',
    image: veniceImage,
  },
];

const PlaceCard = () => (
  <div className="card-grid">
    {places.map((place, index) => (
      <Card className="mb-4" key={index}>
        <Card.Img variant="top" src={place.image} alt={place.name} />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>{place.description}</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
);

export default PlaceCard;