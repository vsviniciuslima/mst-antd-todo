import React from 'react'
import '../../node_modules/antd/dist/antd.css'
import { Col, Row, Typography, Radio } from 'antd'

const { Text } = Typography

export default function ({ name }) {
  return (
    <Row>
      <Col span='3'>
        <Text>0 items left</Text>
      </Col>
      <Col span='16'>
        <Radio.Group size='small'>
          <Radio.Button value='large'>Large</Radio.Button>
          <Radio.Button value='default'>Default</Radio.Button>
          <Radio.Button value='small'>Small</Radio.Button>
        </Radio.Group>
      </Col>
      <Col span='5' justify='end'>
        <Text>Clear completed</Text>
      </Col>
    </Row>
  )
}
