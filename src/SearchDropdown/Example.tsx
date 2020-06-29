import React from 'react'
import { SearchDropdown } from './SearchDropdown'

export const Example = () => {
  const items = [
    { id: '1', text: 'Blue', value: 'bl' },
    { id: '2', text: 'Yellow', value: 'ye' },
    { id: '3', text: 'Green', value: 'gr' },
    { id: '4', text: 'Red', value: 're' },
    { id: '5', text: 'Purple', value: 'pu' }
  ]
  return (
    <SearchDropdown items={items} defaultValue={'Red'}>
      {items.map((item) => (
        <SearchDropdown.Item
          key={item.id} // required -- use id
          filterKey={item.id} // required -- use id
          // onClick={handleClick} // optional
        >
          {item.text}
        </SearchDropdown.Item>
      ))}
    </SearchDropdown>
  )
}
