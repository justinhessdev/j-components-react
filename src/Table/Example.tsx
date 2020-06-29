import React from 'react'
import { Table } from './Table'

const items = [
  { name: 'Justin', age: '32', location: 'New York' },
  { name: 'Aaron', age: '35', location: 'New York' },
  { name: 'Ben', age: '30', location: 'Los Angeles' }
]

const headerCells = ['name', 'age', 'location']

export const Example = () => {
  return (
    <Table items={items} headerCells={headerCells}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Josh</Table.Cell>
          <Table.Cell>39</Table.Cell>
          <Table.Cell>New Jersey</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jeremy</Table.Cell>
          <Table.Cell>37</Table.Cell>
          <Table.Cell>Israel</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jared</Table.Cell>
          <Table.Cell>35</Table.Cell>
          <Table.Cell>Israel</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Justin</Table.Cell>
          <Table.Cell>32</Table.Cell>
          <Table.Cell>New York</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jordan</Table.Cell>
          <Table.Cell>30</Table.Cell>
          <Table.Cell>Los Angeles</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jason</Table.Cell>
          <Table.Cell>27</Table.Cell>
          <Table.Cell>Israel</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jonah</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>Israel</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
