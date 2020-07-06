import React from 'react'
import { Table } from './Table'

const items = [
  { name: 'Alexis', age: 29, location: 'New York' },
  { name: 'Rachel', age: 25, location: 'Texas' },
  { name: 'Ben', age: 27, location: 'Nevada' },
  { name: 'Jack', age: 35, location: 'Alabama' },
  { name: 'Max', age: 38, location: 'California' },
  { name: 'Jessica', age: 37, location: 'Florida' }
]

const headerCells = ['name', 'age', 'location']

export const Example = () => {
  return <Table items={items} headerCells={headerCells} />
}
