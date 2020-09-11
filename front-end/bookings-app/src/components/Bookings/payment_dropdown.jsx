import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Cash', value: 1 },
  { key: 2, text: 'Debit Card', value: 2 },
  { key: 3, text: 'Credit Card', value: 3 },
  { key: 4, text: 'UPI', value: 4 },
]

const PaymentType = () => (
  <Dropdown clearable options={options} selection />
)

export default PaymentType