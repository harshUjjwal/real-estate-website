import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './PropertyHighlights.css';

const highlightCards = [
  {
    title: 'Owner Properties',
    count: '5,696',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Projects',
    count: '214',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Ready to Move-in',
    count: '9,316',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Budget Homes',
    count: '1,678',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=80'
  }
];

const PropertyHighlights: React.FC = () => {
  return (
    <section className="property-highlights">
      <Container>
        <h2 className="section-title mb-4">
          We've got properties in Ghaziabad for everyone
        </h2>
        
        <Row>
          {highlightCards.map((card, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <Card className="highlight-card">
                <div className="card-image-wrapper">
                  <Card.Img variant="top" src={card.image} alt={card.title} />
                  <div className="card-overlay">
                    <h3 className="card-count">{card.count}</h3>
                    <p className="card-title">{card.title}</p>
                    <button className="explore-btn">
                      Explore <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PropertyHighlights; 