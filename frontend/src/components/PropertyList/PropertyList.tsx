import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropertyCard from '../PropertyCard/PropertyCard';
import './PropertyList.css';

// Sample property data
const sampleProperties = [
  {
    id: 1,
    title: 'Modern 3 BHK Apartment in Indirapuram',
    location: 'Indirapuram, Ghaziabad',
    price: '₹65 Lac',
    beds: 3,
    baths: 2,
    sqft: '1,450',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Luxurious 4 BHK Villa in Raj Nagar Extension',
    location: 'Raj Nagar Extension, Ghaziabad',
    price: '₹1.2 Cr',
    beds: 4,
    baths: 3,
    sqft: '2,200',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Spacious 2 BHK Apartment with Garden View',
    location: 'Vaishali, Ghaziabad',
    price: '₹45 Lac',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    imageUrl: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Premium 3 BHK Independent House',
    location: 'Crossings Republik, Ghaziabad',
    price: '₹85 Lac',
    beds: 3,
    baths: 3,
    sqft: '1,800',
    imageUrl: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Modern Studio Apartment Near Metro',
    location: 'Vaishali, Ghaziabad',
    price: '₹32 Lac',
    beds: 1,
    baths: 1,
    sqft: '600',
    imageUrl: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Ready to Move',
    imageCount: 6
  },
  {
    id: 6,
    title: 'Elegant 4 BHK Penthouse with Terrace',
    location: 'Indirapuram, Ghaziabad',
    price: '₹1.5 Cr',
    beds: 4,
    baths: 4,
    sqft: '2,800',
    imageUrl: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
  }
];

const PropertyList: React.FC = () => {
  return (
    <section className="property-list-section">
      <Container>
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">Explore our handpicked properties in your area</p>
        
        <Row>
          {sampleProperties.map((property) => (
            <Col key={property.id} lg={4} md={6} className="mb-4">
              <PropertyCard
                title={property.title}
                location={property.location}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                imageUrl={property.imageUrl}
                onClick={() => console.log(`Clicked property ${property.id}`)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PropertyList; 