import React from 'react'
import '../../node_modules/antd/dist/antd.css'
import { Form, Card, Row, Col, Radio, Typography } from 'antd'

const { Text } = Typography

export default function ({ children }) {
  return (
    <Card>
      <Form style={{ width: 550 }}>
        {children}
      </Form>
      <Row>
        <Col span='6'>
          <Text>0 items left</Text>
        </Col>
        <Col span='12'>
          <Radio.Group size='small'>
            <Radio.Button value='all'>All</Radio.Button>
            <Radio.Button value='active'>Active</Radio.Button>
            <Radio.Button value='completed'>Completed</Radio.Button>
          </Radio.Group>
        </Col>
        <Col span='6'>
          <Radio.Group size='small'>
            <Radio.Button value='large'>Clear completed</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    </Card>
  )
}
