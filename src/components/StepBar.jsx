import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import '../styles/StepBar.scss';
const StepBar = ({ stepData }) => {
  return (
    <Container className="vertical-step-bar">
      {stepData.map((step, index) => (
        <Row key={index} className={`step-row ${step.completed ? 'completed' : ''}`}>
          <Col sm={2} className="text-center">
            <div className="step-number">
              {index + 1}
            </div>
          </Col>
          <Col sm={10}>
            <div className="step-description">
              <strong>{step.title}</strong>
              {step.completed && <p>{step.time}</p>}
            </div>
          </Col>
        </Row>
      ))}
      <ProgressBar>
        {stepData.map((step, index) => (
          <ProgressBar
            key={index}
            now={step.completed ? 100 : 0}
            label={step.completed ? 'Completed' : ''}
          />
        ))}
      </ProgressBar>
    </Container>
  );
};

export default StepBar;
