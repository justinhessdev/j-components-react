import React from 'react'
import { Table } from './Table'

const items = [
  { name: 'Justin', age: '32', location: 'New York' },
  { name: 'Aaron', age: '35', location: 'New York' },
  { name: 'Ben', age: '30', location: 'Texas' }
]

const headerCells = ['name', 'age', 'location']

export const Example = () => {
  return <Table items={items} headerCells={headerCells} />
}
