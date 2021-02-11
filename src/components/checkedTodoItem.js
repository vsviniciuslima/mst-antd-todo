import React from 'react'
import '../../node_modules/antd/dist/antd.css'
import { Checkbox, Col, Row, Form, Typography, Divider } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

const { Text } = Typography

function onChange (e) {
  console.log(`checked = ${e.target.checked}`)
}

export default function ({ name }) {
  return (
    <Form.Item>
      <Row>
        <Col span='2'>
          <Checkbox onChange={onChange} defaultChecked='true' />
        </Col>
        <Col span='20'>
          <Text type='secondary' delete>{name}</Text>
        </Col>
        <Col span='2' justify='end'>
          <CloseOutlined style={{ color: '#af5b5e' }} />
        </Col>
      </Row>
      <Divider />
    </Form.Item>
  )
}
