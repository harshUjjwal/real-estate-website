import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="footer-info">
              <h3>Chaudhary Bricks</h3>
              <p className="mt-3">
                Your trusted partner in real estate. Find your dream property with the most reliable real estate agency in Ghaziabad.
              </p>
              <div className="social-links mt-4">
                <a href="#facebook" className="social-link">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#twitter" className="social-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#instagram" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#linkedin" className="social-link">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                <a href="#about">About Us</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                <a href="#properties">Properties</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                <a href="#agents">Our Agents</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                <a href="#blog">Real Estate Blog</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                123 Main Street, Indirapuram
                <br />Ghaziabad, UP 201014
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:info@chaudharybricks.com">info@chaudharybricks.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} className="me-2" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest property updates.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mb-2"
              />
              <button type="submit" className="btn btn-danger w-100">
                Subscribe Now
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-md-0">
                © {new Date().getFullYear()} Chaudhary Bricks. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-bottom-links">
                <a href="#terms">Terms & Conditions</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#sitemap">Sitemap</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer; 