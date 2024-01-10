import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Import local images
import image1 from './img 1.jpg';
import image2 from './img 2.jpg';
import image3 from './img 3.jpg';
import image4 from './img 4.jpg';
import image5 from './img 7.jpg';
import image6 from './img 6.jpg';

const Home = () => {
  // Sample data for titles, bodies, and prices
  const cardData = [
    { id: 1, title: 'Fresh Creame Cake', body: 'Delicious cake with fresh cream, perfect for any celebration.', price: '$10' },
    { id: 2, title: 'Ajmeer Cake', body: 'Special cake inspired by the flavors of Ajmeer, a treat for your taste buds.', price: '$15' },
    { id: 3, title: 'Sponge Cake', body: 'Light and fluffy sponge cake, a classic choice for any occasion.', price: '$20' },
    { id: 4, title: 'Breads & Buns', body: 'Variety of freshly baked breads and buns, perfect for breakfast or snacks.', price: '$25' },
    { id: 5, title: 'Cup Cakes', body: 'Indulge in our assortment of delightful cupcakes, a sweet delight.', price: '$30' },
    { id: 6, title: 'Chocolates', body:  'Handcrafted chocolates made with the finest ingredients, a chocolate lover\'s dream.', price: '$35' },
  ];

  // Corresponding local images
  const imageArray = [image1, image2, image3, image4, image5, image6];

  return (
    <Container className="background-container">
      <Row>
        {cardData.map((card, index) => (
          <Col key={card.id} md={4} className="mb-4 mt-4">
            <Card>
             
              <Card.Img variant="top" src={imageArray[index]} />
              <Card.Body className="custom-card-body">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.body}</Card.Text>
                <div className="price-tag">{card.price}</div>
                <Button id="btn" className='btn-block'>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
