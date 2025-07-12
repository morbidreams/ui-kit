import React from 'react';
import Row from '../Row';
import Col, { ColProps } from './index';

const baseProps: ColProps = {
  children: (
    <Row>
      <Col mobile={12}>
        <div style={{ padding: '16px', textAlign: 'center', border: '1px solid #ccc' }}>mobile=12</div>
      </Col>
    </Row>
  ),
};

const responsiveProps: ColProps = {
  children: (
    <Row>
      <Col mobile={6} desktop={8}>
        <div style={{ padding: '16px', textAlign: 'center', border: '1px solid #ccc' }}>mobile=6 desktop=8</div>
      </Col>
    </Row>
  ),
};

const fullWidthMobileHalfdesktop: ColProps = {
  children: (
    <Row>
      <Col desktop={6}>
        <div style={{ padding: '16px', textAlign: 'center', border: '1px solid #ccc' }}>mobile=12 desktop=6</div>
      </Col>
    </Row>
  ),
};

const basicGrid: ColProps = {
  children: (
    <Row>
      <Col>
        <div style={{ padding: '16px', textAlign: 'center', border: '1px solid #ccc' }}>mobile=0 desktop=0</div>
      </Col>
      <Col>
        <div style={{ padding: '16px', textAlign: 'center', border: '1px solid #ccc' }}>mobile=0 desktop=0</div>
      </Col>
      <Col mobile={12} desktop={8}>
        <div style={{ padding: '16px', textAlign: 'center', border: '1px solid #ccc' }}>mobile=12 desktop=8</div>
      </Col>
    </Row>
  ),
};
const responsiveGrid: ColProps = {
  children: (
    <Row>
      {[0, 1, 2].map((value) => (
        <Col key={value} mobile={12} desktop={4}>
          <div style={{ padding: '16px', textAlign: 'center', border: '1px solid #ccc' }}>mobile=12 desktop=4</div>
        </Col>
      ))}
    </Row>
  ),
};

export const mockColProps = {
  base: baseProps,
  responsive: responsiveProps,
  fullWidthMobileHalfdesktop,
  basicGrid,
  responsiveGrid,
};
