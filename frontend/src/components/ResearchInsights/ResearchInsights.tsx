import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faHome, 
  faMapMarkerAlt, 
  faHandshake 
} from '@fortawesome/free-solid-svg-icons';
import './ResearchInsights.css';

const insights = [
  {
    id: 1,
    icon: faChartLine,
    title: 'Market Growth',
    description: 'Property prices in Ghaziabad have shown a consistent 8-12% annual appreciation over the last 5 years, making it a stable investment destination.',
    color: '#28a745'
  },
  {
    id: 2,
    icon: faHome,
    title: 'Property Types',
    description: '3 BHK apartments are the most sought-after configuration, followed by 2 BHK units. Luxury segments show increasing demand.',
    color: '#dc3545'
  },
  {
    id: 3,
    icon: faMapMarkerAlt,
    title: 'Location Trends',
    description: 'Indirapuram and Vaishali remain premium locations, while Raj Nagar Extension shows promising growth potential.',
    color: '#17a2b8'
  },
  {
    id: 4,
    icon: faHandshake,
    title: 'Investment Tips',
    description: 'Properties near upcoming infrastructure projects show higher appreciation potential. Consider factors like metro connectivity.',
    color: '#ffc107'
  }
];

const ResearchInsights: React.FC = () => {
  return (
    <section className="research-insights">
      <Container>
        <h2 className="section-title">Research Insights</h2>
        <p className="section-subtitle">Latest market research and analysis</p>
        
        <Row>
          {insights.map(insight => (
            <Col key={insight.id} lg={3} md={6} className="mb-4">
              <Card className="insight-card">
                <Card.Body>
                  <div 
                    className="icon-wrapper"
                    style={{ backgroundColor: insight.color + '20' }}
                  >
                    <FontAwesomeIcon 
                      icon={insight.icon} 
                      style={{ color: insight.color }}
                    />
                  </div>
                  <Card.Title>{insight.title}</Card.Title>
                  <Card.Text>{insight.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="market-summary">
          <h3>Market Overview</h3>
          <p>
            The real estate market in Ghaziabad has shown remarkable resilience and growth 
            potential. With improving infrastructure, metro connectivity, and upcoming 
            commercial developments, the region continues to attract both end-users and 
            investors. The affordable housing segment, coupled with premium residential 
            options, caters to diverse buyer preferences.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ResearchInsights; 