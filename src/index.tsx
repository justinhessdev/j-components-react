import * as React from 'react'
export { SearchDropdown } from './SearchDropdown/SearchDropdown'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}
