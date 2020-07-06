import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Table } from './Table'

const items = [
  { name: 'Justin', age: '32', location: 'New York' },
  { name: 'Aaron', age: '35', location: 'New York' },
  { name: 'Ben', age: '30', location: 'Texas' }
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
const setup = () => {
  return render(<Table items={items} headerCells={headerCells} />)
}

// test('renders without error', () => {
//   setup()
//   screen.getByTestId('component-sortable-table') // errors out if there is no test id match
// })

test('sorts table asc by name on click', () => {
  const { getAllByRole } = setup()
  const columnHeaders = getAllByRole('columnheader')

  fireEvent.click(columnHeaders[0]) // columnHeaders[0] is name

  const cells = getAllByRole('cell')
  const textArr = cells.map((cell) => cell.textContent)
  const sortedArrayAscByName = [
    'Aaron',
    '35',
    'New York',
    'Ben',
    '30',
    'Texas',
    'Justin',
    '32',
    'New York'
  ]
  // fire click event
  expect(textArr).toEqual(sortedArrayAscByName)
})

test('sorts table asc by age on click', () => {
  const { getAllByRole } = setup()
  const columnHeaders = getAllByRole('columnheader')

  fireEvent.click(columnHeaders[1]) // columnHeaders[1] is age

  const cells = getAllByRole('cell')
  const textArr = cells.map((cell) => cell.textContent)
  const sortedArrayAscByAge = [
    'Ben',
    '30',
    'Texas',
    'Justin',
    '32',
    'New York',
    'Aaron',
    '35',
    'New York'
  ]
  // fire click event
  expect(textArr).toEqual(sortedArrayAscByAge)
})

test('sorts table asc by location on click', () => {
  const { getAllByRole } = setup()
  const columnHeaders = getAllByRole('columnheader')

  fireEvent.click(columnHeaders[2]) // columnHeaders[2] is location

  const cells = getAllByRole('cell')
  const textArr = cells.map((cell) => cell.textContent)
  const sortedArrayAscByLocation = [
    'Justin',
    '32',
    'New York',
    'Aaron',
    '35',
    'New York',
    'Ben',
    '30',
    'Texas'
  ]
  // fire click event
  expect(textArr).toEqual(sortedArrayAscByLocation)
})

test('sorts table desc by name on second click', () => {
  const { getAllByRole } = setup()
  const columnHeaders = getAllByRole('columnheader')

  fireEvent.click(columnHeaders[0]) // name clicked once -> asc
  fireEvent.click(columnHeaders[0]) // name clicked again -> desc

  const cells = getAllByRole('cell')
  const textArr = cells.map((cell) => cell.textContent)
  const sortedArrayDescByName = [
    'Justin',
    '32',
    'New York',
    'Ben',
    '30',
    'Texas',
    'Aaron',
    '35',
    'New York'
  ]
  // fire click event
  expect(textArr).toEqual(sortedArrayDescByName)
})

test('sorts table desc by age on second click', () => {
  const { getAllByRole } = setup()
  const columnHeaders = getAllByRole('columnheader')

  fireEvent.click(columnHeaders[1]) // age clicked once -> ascending
  fireEvent.click(columnHeaders[1]) // age clicked again -> descending

  const cells = getAllByRole('cell')
  const textArr = cells.map((cell) => cell.textContent)
  const sortedArrayDescByAge = [
    'Aaron',
    '35',
    'New York',
    'Justin',
    '32',
    'New York',
    'Ben',
    '30',
    'Texas'
  ]
  // fire click event
  expect(textArr).toEqual(sortedArrayDescByAge)
})

test('sorts table desc by location on second click', () => {
  const { getAllByRole } = setup()

  const columnHeaders = getAllByRole('columnheader')
  fireEvent.click(columnHeaders[2]) // location double clicked -> ascending
  fireEvent.click(columnHeaders[2]) // location double clicked -> ascending

  const cells = getAllByRole('cell')
  const textArr = cells.map((cell) => cell.textContent)
  const sortedArrayDescByLocation = [
    'Ben',
    '30',
    'Texas',
    'Justin',
    '32',
    'New York',
    'Aaron',
    '35',
    'New York'
  ]
  // fire click event
  expect(textArr).toEqual(sortedArrayDescByLocation)
})
