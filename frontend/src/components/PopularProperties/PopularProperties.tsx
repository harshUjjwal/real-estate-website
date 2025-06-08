import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropertyCard from '../PropertyCard/PropertyCard';
import './PopularProperties.css';

const properties = [
  {
    id: 1,
    title: 'Apartment',
    location: 'Indirapuram, Ghaziabad',
    price: '₹65.5 Lac',
    beds: 3,
    baths: 2,
    sqft: '1,450',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Ready to Move',
    imageCount: 6
  },
  {
    id: 2,
    title: '4 BHK Villa in Raj Nagar Extension',
    location: 'Raj Nagar Extension, Ghaziabad',
    price: '₹1.2 Cr',
    beds: 4,
    baths: 3,
    sqft: '2,200',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: '2 BHK Apartment in Vaishali',
    location: 'Vaishali, Ghaziabad',
    price: '₹45.8 Lac',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    imageUrl: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: '3 BHK Independent House in Crossings Republik',
    location: 'Crossings Republik, Ghaziabad',
    price: '₹85.5 Lac',
    beds: 3,
    baths: 3,
    sqft: '1,800',
    imageUrl: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const PopularProperties: React.FC = () => {
  return (
    <section className="popular-properties">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Popular Owner Properties</h2>
          <a href="#all-properties" className="see-all-link">
            See all Properties <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <Row>
          {properties.map((property) => (
            <Col key={property.id} lg={3} md={6} className="mb-4">
              <PropertyCard
                title={property.title}
                location={property.location}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                imageUrl={property.imageUrl}
                status={property.status}
                imageCount={property.imageCount}
                onClick={() => console.log(`Clicked property ${property.id}`)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularProperties; 