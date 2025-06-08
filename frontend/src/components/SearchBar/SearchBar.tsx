import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faMapMarkerAlt,
  faHome,
  faRupeeSign,
  faRuler,
  faBed,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

interface SearchState {
  location: string;
  propertyType: string;
  budget: string;
  bedrooms: string;
  builtUpArea: string;
  constructionStatus: string;
  furnishing: string;
}

const SearchBar: React.FC = () => {
  const [key, setKey] = useState('buy');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchState, setSearchState] = useState<SearchState>({
    location: '',
    propertyType: '',
    budget: '',
    bedrooms: '',
    builtUpArea: '',
    constructionStatus: '',
    furnishing: ''
  });

  const budgetRanges = {
    buy: [
      'Under ₹20 Lac',
      '₹20 Lac - ₹40 Lac',
      '₹40 Lac - ₹60 Lac',
      '₹60 Lac - ₹80 Lac',
      '₹80 Lac - ₹1 Cr',
      '₹1 Cr - ₹1.5 Cr',
      'Above ₹1.5 Cr'
    ],
    rent: [
      'Under ₹5,000',
      '₹5,000 - ₹10,000',
      '₹10,000 - ₹15,000',
      '₹15,000 - ₹20,000',
      '₹20,000 - ₹25,000',
      'Above ₹25,000'
    ]
  };

  const propertyTypes = [
    { type: 'Apartment', subtypes: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'] },
    { type: 'Independent House', subtypes: ['Villa', 'Individual House', 'Farm House'] },
    { type: 'Plot', subtypes: ['Residential Plot', 'Commercial Plot', 'Agricultural Land'] },
    { type: 'Commercial', subtypes: ['Office Space', 'Shop', 'Showroom', 'Warehouse'] }
  ];

  const localities = [
    'Indirapuram',
    'Vaishali',
    'Raj Nagar Extension',
    'Crossings Republik',
    'Vasundhara',
    'Kaushambi',
    'NH-24',
    'Loni'
  ];

  const handleInputChange = (field: keyof SearchState, value: string) => {
    setSearchState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Combine the search type (key) with the search state
    const searchData = {
      searchType: key,
      ...searchState
    };
    
    console.log('Search Data:', searchData);
    // Here you would typically:
    // 1. Make an API call to your backend
    // 2. Update the UI with loading state
    // 3. Handle the response and show results
    
    // For now, we'll just log the search criteria
    alert('Search criteria:\n' + JSON.stringify(searchData, null, 2));
  };

  return (
    <div className="search-section">
      <Container>
        <h1 className="text-center mb-4">Find a home you'll love</h1>
        
        <div className="search-container">
          <Tabs
            id="search-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k || 'buy')}
            className="mb-4"
          >
            <Tab eventKey="buy" title="Buy" />
            <Tab eventKey="rent" title="Rent" />
            <Tab eventKey="pg" title="PG" />
            <Tab eventKey="commercial" title="Commercial" />
            <Tab eventKey="plots" title="Plots" />
            <Tab eventKey="post" title="Post Free Property Ad" />
          </Tabs>

          <Form onSubmit={handleSearch}>
            <Row className="g-3 mb-4">
              <Col lg={3} md={6}>
                <div className="search-input">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
                  <Form.Select
                    value={searchState.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                  >
                    <option value="">Select Location</option>
                    {localities.map((locality, index) => (
                      <option key={index} value={locality}>{locality}</option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
              
              <Col lg={3} md={6}>
                <div className="search-input">
                  <FontAwesomeIcon icon={faHome} className="search-icon" />
                  <Form.Select
                    value={searchState.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    required
                  >
                    <option value="">Property Type</option>
                    {propertyTypes.map((pType, index) => (
                      <optgroup key={index} label={pType.type}>
                        {pType.subtypes.map((subtype, subIndex) => (
                          <option key={`${index}-${subIndex}`} value={subtype}>{subtype}</option>
                        ))}
                      </optgroup>
                    ))}
                  </Form.Select>
                </div>
              </Col>
              
              <Col lg={3} md={6}>
                <div className="search-input">
                  <FontAwesomeIcon icon={faRupeeSign} className="search-icon" />
                  <Form.Select
                    value={searchState.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    required
                  >
                    <option value="">Budget</option>
                    {budgetRanges[key === 'rent' ? 'rent' : 'buy'].map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
              
              <Col lg={3} md={6}>
                <Button type="submit" className="w-100 search-btn">
                  <FontAwesomeIcon icon={faSearch} className="me-2" />
                  Search
                </Button>
              </Col>
            </Row>

            <div className="text-center mb-3">
              <Button
                variant="link"
                className="advanced-search-toggle"
                onClick={() => setShowAdvanced(!showAdvanced)}
                type="button"
              >
                {showAdvanced ? 'Hide Advanced Search' : 'Show Advanced Search'}
              </Button>
            </div>

            {showAdvanced && (
              <Row className="g-3 advanced-search">
                <Col lg={3} md={6}>
                  <div className="search-input">
                    <FontAwesomeIcon icon={faBed} className="search-icon" />
                    <Form.Select
                      value={searchState.bedrooms}
                      onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                    >
                      <option value="">Bedrooms</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4+">4+</option>
                    </Form.Select>
                  </div>
                </Col>

                <Col lg={3} md={6}>
                  <div className="search-input">
                    <FontAwesomeIcon icon={faRuler} className="search-icon" />
                    <Form.Select
                      value={searchState.builtUpArea}
                      onChange={(e) => handleInputChange('builtUpArea', e.target.value)}
                    >
                      <option value="">Built-up Area</option>
                      <option value="Under 500 sq.ft">Under 500 sq.ft</option>
                      <option value="500 - 1000 sq.ft">500 - 1000 sq.ft</option>
                      <option value="1000 - 1500 sq.ft">1000 - 1500 sq.ft</option>
                      <option value="1500 - 2000 sq.ft">1500 - 2000 sq.ft</option>
                      <option value="Above 2000 sq.ft">Above 2000 sq.ft</option>
                    </Form.Select>
                  </div>
                </Col>

                <Col lg={3} md={6}>
                  <div className="search-input">
                    <FontAwesomeIcon icon={faBuilding} className="search-icon" />
                    <Form.Select
                      value={searchState.constructionStatus}
                      onChange={(e) => handleInputChange('constructionStatus', e.target.value)}
                    >
                      <option value="">Construction Status</option>
                      <option value="Ready to Move">Ready to Move</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="New Launch">New Launch</option>
                    </Form.Select>
                  </div>
                </Col>

                <Col lg={3} md={6}>
                  <div className="search-input">
                    <Form.Select
                      value={searchState.furnishing}
                      onChange={(e) => handleInputChange('furnishing', e.target.value)}
                    >
                      <option value="">Furnishing</option>
                      <option value="Fully Furnished">Fully Furnished</option>
                      <option value="Semi Furnished">Semi Furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
            )}
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar; 