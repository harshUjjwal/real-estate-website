import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './PropertyCard.css';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  imageUrl: string;
  status?: string;
  imageCount?: number;
  onClick?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  imageUrl,
  status = 'Ready to Move',
  imageCount = 6,
  onClick
}) => {
  const [isImageError, setIsImageError] = useState(false);

  const handleImageError = () => {
    setIsImageError(true);
  };

  const fallbackImage = `https://via.placeholder.com/400x300/f8f9fa/495057?text=Property+Image`;

  return (
    <Card className="property-card" onClick={onClick}>
      <div className="property-image">
        <Card.Img
          variant="top"
          src={isImageError ? fallbackImage : imageUrl}
          alt={`${beds} BHK ${title}`}
          onError={handleImageError}
          className="img-fluid"
          loading="lazy"
        />
        <div className="image-count">
          <FontAwesomeIcon icon={faImage} /> {imageCount}
        </div>
      </div>
      <Card.Body>
        <h3 className="property-title">{`${beds} BHK ${title}`}</h3>
        <div className="property-price-area">
          <span className="price">{price}</span>
          <span className="separator">|</span>
          <span className="area">{sqft} sqft</span>
        </div>
        <p className="property-location">{location}</p>
        <p className="property-status">{status}</p>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard; 