import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Panoramic Room', value: 1, price: 500 },
  { key: 2, text: 'Small Conference Room', value: 2, price: 300 },
  { key: 3, text: 'Large Conference Room', value: 3, price: 600 },
]

const RoomType = () => (
  <Dropdown clearable options={options} selection />
)

export default RoomType