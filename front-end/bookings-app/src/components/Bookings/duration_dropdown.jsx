import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Duration_a', value: 1 },
  { key: 2, text: 'Duration_b', value: 2 },
  { key: 3, text: 'Duration_c', value: 3 },
]

const DurationType = () => (
  <Dropdown clearable options={options} selection />
)

export default DurationType