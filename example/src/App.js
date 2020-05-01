import React from 'react'

import { SearchDropdown } from 'j-components-react'
import 'j-components-react/dist/index.css'

const objs2 = [
  { id: '1', text: 'Blue', value: 'bl' },
  { id: '2', text: 'Yellow', value: 'ye' },
  { id: '3', text: 'Green', value: 'gr' },
  { id: '4', text: 'Red', value: 're' },
  { id: '5', text: 'Purple', value: 'pu' }
]

const App = () => {
  return (
    <SearchDropdown items={objs2} defaultValue={'Scooby Doo'}>
      {objs2.map((obj) => (
        <SearchDropdown.Item key={obj.id} filterKey={obj.id}>
          <div style={{ color: 'blue' }}>{obj.text}</div>
        </SearchDropdown.Item>
      ))}
    </SearchDropdown>
  )
}

export default App
