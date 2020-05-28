import React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from './Counter'

/**
 * We are testing behavior over implementation
 */

/**
 * Factoery function to create render for Coutner component
 * @function setup
 * @param {object} props - component props sepecific to this setup
 * @param {any} state - Initial state for setup
 * @returns rendered component
 */
const setup = (props = {}, state = null) => {
  return render(<Counter {...props} />)
}

test('renders without error', () => {
  setup()
  screen.getByTestId('component-counter') // errors out if there is no test id match
})

test('renders increment button', () => {
  setup()
  screen.getByTestId('increment-button') // errors out if there is no test id match
})

test('renders counter display', () => {
  setup()
  screen.getByTestId('counter-display') // errors out if there is no test id match
})

test('renders counter starts at 0', () => {})

test('renders clicking button increments counter display', () => {})

test('renders diff snapshot clicking button increments counter', () => {
  // const { getByText, asFragment } = render(<Counter />)
  // const firstRender = asFragment()
  // fireEvent.click(getByText(/Increment/))
  // expect(firstRender).toMatchDiffSnapshot(asFragment())
})
