import { Input } from 'antd'
import '../App.css'

import { ArrowDownOutlined } from '@ant-design/icons'

export default function () {
  return (
    <Input style={{ width: 600, height: 55 }} placeholder='What needs to be done?' prefix={<ArrowDownOutlined />} />
  )
}
