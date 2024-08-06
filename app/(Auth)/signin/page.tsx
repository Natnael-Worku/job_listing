
import React from 'react'
import { Col, Row } from 'antd';
import Login from '@/components/Login';

const page = () => {
  return (
    
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}><Login/></Col>
    </Row>
  )
}

export default page