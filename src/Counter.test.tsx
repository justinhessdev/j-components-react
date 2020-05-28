import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

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

test('renders counter starts at 0', () => {
  setup()
  const counterDisplay = screen.getByTestId('counter-display')
  expect(counterDisplay).toHaveTextContent('0')
})

test('renders clicking button increments counter display', () => {
  setup()

  // find counter display
  const counterDisplay = screen.getByTestId('counter-display')

  // initial display should be 0
  expect(counterDisplay).toHaveTextContent('0')

  // find increment button
  const incrementButton = screen.getByTestId('increment-button')

  // fire click event
  fireEvent.click(incrementButton)

  // display should be incremented by 1
  expect(counterDisplay).toHaveTextContent('1')
})

test('renders diff snapshot clicking button increments counter', () => {
  const { asFragment } = setup()
  const firstRender = asFragment()
  const incrementButton = screen.getByTestId('increment-button')
  fireEvent.click(incrementButton)
  expect(firstRender).toMatchDiffSnapshot(asFragment())
})
