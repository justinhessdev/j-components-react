import * as React from 'react'
export { SearchDropdown } from './SearchDropdown/SearchDropdown'
export { Dropdown } from './Dropdown/Dropdown'
export { Toggle } from './Toggle/Toggle'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}
