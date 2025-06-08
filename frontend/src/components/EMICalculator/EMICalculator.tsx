import React, { useState, useEffect, useCallback } from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import './EMICalculator.css';

interface EMIResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
}

const EMICalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [results, setResults] = useState<EMIResult>({
    emi: 0,
    totalPayment: 0,
    totalInterest: 0
  });

  const calculateEMI = useCallback(() => {
    try {
      const principal = Math.max(0, loanAmount);
      const ratePerMonth = Math.max(0, interestRate) / (12 * 100);
      const numberOfPayments = Math.max(1, loanTerm) * 12;

      if (principal === 0 || ratePerMonth === 0) {
        setResults({ emi: 0, totalPayment: 0, totalInterest: 0 });
        return;
      }

      const emiAmount = principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments) / 
                       (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);
      
      const totalAmount = emiAmount * numberOfPayments;
      const totalInterestAmount = totalAmount - principal;

      setResults({
        emi: Math.round(emiAmount),
        totalPayment: Math.round(totalAmount),
        totalInterest: Math.round(totalInterestAmount)
      });
    } catch (error) {
      console.error('Error calculating EMI:', error);
      setResults({ emi: 0, totalPayment: 0, totalInterest: 0 });
    }
  }, [loanAmount, interestRate, loanTerm]);

  useEffect(() => {
    calculateEMI();
  }, [calculateEMI]);

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLoanAmount(value);
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInterestRate(value);
  };

  const handleLoanTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLoanTerm(value);
  };

  return (
    <Card className="emi-calculator">
      <Card.Header as="h5">EMI Calculator</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Loan Amount (₹)</Form.Label>
            <Form.Control
              type="range"
              min="100000"
              max="10000000"
              step="100000"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
            <div className="range-value">₹{loanAmount.toLocaleString()}</div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Interest Rate (%)</Form.Label>
            <Form.Control
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={handleInterestRateChange}
            />
            <div className="range-value">{interestRate}%</div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Loan Term (Years)</Form.Label>
            <Form.Control
              type="range"
              min="1"
              max="30"
              value={loanTerm}
              onChange={handleLoanTermChange}
            />
            <div className="range-value">{loanTerm} years</div>
          </Form.Group>
        </Form>

        <div className="results-container">
          <Row>
            <Col md={4}>
              <div className="result-box">
                <h6>Monthly EMI</h6>
                <div className="amount">₹{results.emi.toLocaleString()}</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="result-box">
                <h6>Total Interest</h6>
                <div className="amount">₹{results.totalInterest.toLocaleString()}</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="result-box">
                <h6>Total Payment</h6>
                <div className="amount">₹{results.totalPayment.toLocaleString()}</div>
              </div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EMICalculator; 