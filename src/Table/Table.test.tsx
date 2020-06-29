import React from 'react'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Table } from './Table'

const items = [
  { name: 'Justin', age: '32', location: 'New York' },
  { name: 'Aaron', age: '35', location: 'New York' },
  { name: 'Ben', age: '30', location: 'Los Angeles' }
]

const headerCells = ['name', 'age', 'location']

/**
 * We are testing behavior over implementation
 */

/**
 * Factory function to create render for Coutner component
 * @function setup
 * @param {object} props - component props sepecific to this setup
 * @param {any} state - Initial state for setup
 * @returns rendered component
 */
const setup = (props = {}, state = null) => {
  return render(<Table items={items} headerCells={headerCells} />)
}

test('renders without error', () => {
  setup()
  screen.getByTestId('component-sortable-table') // errors out if there is no test id match
})

test('sorts table on click', () => {
  const { getAllByRole } = setup()
  const headerCellName = screen.getByTestId('header-cell-name') // errors out if there is no test id match

  fireEvent.click(headerCellName)

  const cells = getAllByRole('cell')
  const textArr = cells.map((cell) => cell.textContent)
  console.log(textArr)
  const sortedArray = [
    'Aaron',
    '35',
    'New York',
    'Ben',
    '30',
    'Los Angeles',
    'Justin',
    '32',
    'New York'
  ]
  // fire click event
  expect(textArr).toEqual(sortedArray)
})
