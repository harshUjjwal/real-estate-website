import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCalculator,
  faMapMarkerAlt,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import './AdviceTools.css';
import EMICalculator from '../EMICalculator/EMICalculator';
import PriceTrends from '../PriceTrends/PriceTrends';

const tools = [
  {
    id: 1,
    icon: faChartLine,
    title: 'Rates & Trends',
    description: 'Know all about Property Rates & Trends in your city',
    link: '/rates-and-trends'
  },
  {
    id: 2,
    icon: faCalculator,
    title: 'EMI Calculator',
    description: 'Know how much you\'ll have to pay every month on your loan',
    link: '/emi-calculator'
  },
  {
    id: 3,
    icon: faMapMarkerAlt,
    title: 'Investment Hotspot',
    description: 'Discover the top localities in your city for investment',
    link: '/investment-hotspot'
  },
  {
    id: 4,
    icon: faFileAlt,
    title: 'Research Insights',
    description: 'Get experts insights and research reports on real estate',
    link: '/research-insights'
  }
];

const AdviceTools: React.FC = () => {
  const [showEMICalculator, setShowEMICalculator] = useState(false);
  const [showPriceTrends, setShowPriceTrends] = useState(false);

  const handleToolClick = (e: React.MouseEvent, toolId: number) => {
    e.preventDefault();
    if (toolId === 2) { // EMI Calculator
      setShowEMICalculator(true);
    } else if (toolId === 1) { // Rates & Trends
      setShowPriceTrends(true);
    }
  };

  return (
    <section className="advice-tools-section">
      <Container>
        <h2 className="section-title">Advice & Tools</h2>
        <Row>
          {tools.map((tool) => (
            <Col key={tool.id} md={6} lg={3} className="mb-4">
              <Card 
                className="tool-card" 
                as="a" 
                href={tool.link}
                onClick={(e) => handleToolClick(e, tool.id)}
              >
                <Card.Body>
                  <div className="tool-icon">
                    <FontAwesomeIcon icon={tool.icon} />
                  </div>
                  <Card.Title className="tool-title">{tool.title}</Card.Title>
                  <Card.Text className="tool-description">
                    {tool.description}
                  </Card.Text>
                  <div className="view-now">
                    View now
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* EMI Calculator Modal */}
      <Modal
        show={showEMICalculator}
        onHide={() => setShowEMICalculator(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>EMI Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EMICalculator />
        </Modal.Body>
      </Modal>

      {/* Price Trends Modal */}
      <Modal
        show={showPriceTrends}
        onHide={() => setShowPriceTrends(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Property Rates & Trends</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PriceTrends />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default AdviceTools; 