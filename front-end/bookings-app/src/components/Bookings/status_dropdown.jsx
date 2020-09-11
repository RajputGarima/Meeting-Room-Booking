import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Pending', value: 1 },
  { key: 2, text: 'Accepted', value: 2 },
  { key: 3, text: 'Rejected', value: 3 },
]

const StatusType = () => (
  <Dropdown clearable options={options} selection />
)

export default StatusType