import React from 'react'
import { SearchDropdown } from 'j-components-react'

const items = [
  { id: '1', text: 'Blue', value: 'bl' },
  { id: '2', text: 'Yellow', value: 'ye' },
  { id: '3', text: 'Green', value: 'gr' },
  { id: '4', text: 'Red', value: 're' },
  { id: '5', text: 'Purple', value: 'pu' }
]

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3em'
      }}
    >
      <SearchDropdown items={items} defaultValue={'Red'}>
        {items.map((item) => (
          <SearchDropdown.Item
            key={item.id} // required
            filterKey={item.id} // required
          >
            {item.text}
          </SearchDropdown.Item>
        ))}
      </SearchDropdown>
    </div>
  )
}

export default App
