import React from 'react'

import { ExampleComponent, SearchDropdown } from 'j-components-react'
import 'j-components-react/dist/index.css'

const items = [
  { id: '1', text: 'Blue', value: 'bl' },
  { id: '2', text: 'Yellow', value: 'ye' },
  { id: '3', text: 'Green', value: 'gr' },
  { id: '4', text: 'Red', value: 're' },
  { id: '5', text: 'Purple', value: 'pu' }
]

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <SearchDropdown items={items} defaultValue={'Red'}>
        {items.map((item) => (
          <SearchDropdown.Item
            key={item.id} // required -- use id
            filterKey={item.id} // required -- use id
          >
            {item.text}
          </SearchDropdown.Item>
        ))}
      </SearchDropdown>
    </div>
  )
}

export default App
