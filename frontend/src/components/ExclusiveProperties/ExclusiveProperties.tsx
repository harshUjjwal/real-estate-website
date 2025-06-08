import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropertyCard from '../PropertyCard/PropertyCard';
import './ExclusiveProperties.css';

const exclusiveProperties = [
  {
    id: 1,
    title: 'Villa',
    location: 'Raj Nagar Extension, Ghaziabad',
    price: '₹1.5 Cr',
    beds: 4,
    baths: 4,
    sqft: '2,800',
    imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Ready to Move',
    imageCount: 8
  },
  {
    id: 2,
    title: 'Luxury 3 BHK Apartment',
    location: 'Indirapuram, Ghaziabad',
    price: '₹85.5 Lac',
    beds: 3,
    baths: 3,
    sqft: '1,750',
    imageUrl: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Ready to Move'
  },
  {
    id: 3,
    title: 'Modern 4 BHK Penthouse',
    location: 'Vaishali, Ghaziabad',
    price: '₹1.8 Cr',
    beds: 4,
    baths: 4,
    sqft: '3,200',
    imageUrl: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Under Construction'
  },
  {
    id: 4,
    title: 'Spacious 3 BHK Apartment',
    location: 'Crossings Republik, Ghaziabad',
    price: '₹72.5 Lac',
    beds: 3,
    baths: 2,
    sqft: '1,550',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Ready to Move'
  },
  {
    id: 5,
    title: 'Premium 2 BHK Apartment',
    location: 'Vaishali, Ghaziabad',
    price: '₹55.5 Lac',
    beds: 2,
    baths: 2,
    sqft: '1,150',
    imageUrl: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Ready to Move'
  }
];

const ExclusiveProperties: React.FC = () => {
  return (
    <section className="exclusive-properties-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Exclusive Owner Properties in Ghaziabad</h2>
          <a href="/all-properties" className="see-all-link">
            See all Properties <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        
        <div className="properties-scroll-container">
          <Row className="flex-nowrap">
            {exclusiveProperties.map((property) => (
              <Col key={property.id} xs={12} sm={6} lg={4} xl={3} className="property-col">
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
                  onClick={() => console.log(`Clicked exclusive property ${property.id}`)}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ExclusiveProperties; 