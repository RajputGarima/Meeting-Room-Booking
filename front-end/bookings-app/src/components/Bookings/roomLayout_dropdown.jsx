import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Banquet Rounds', value: 1 },
  { key: 2, text: 'Classroom', value: 2 },
  { key: 3, text: 'Conference', value: 3 },
  { key: 4, text: 'Hollow Square', value: 4 },
  { key: 5, text: 'Theater', value: 5 },
  { key: 6, text: 'U-shape', value: 6 },
]

const RoomType = () => (
  <Dropdown clearable options={options} selection />
)

export default RoomType