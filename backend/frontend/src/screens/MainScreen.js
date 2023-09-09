import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Category from '../components/Category'
import categories from '../categories'

function MainScreen() {
    
  return (
    <div>
        <Row>
            {categories.map(category => (
                <Col key={category._id} sm={12} md={6} lg={4} xl={3}>
                    <Category category={category} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default MainScreen