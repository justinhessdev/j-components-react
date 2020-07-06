# j-components-react

> Simplistic React component library tailored to the developer

[![NPM](https://img.shields.io/npm/v/j-components-react.svg)](https://www.npmjs.com/package/j-components-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save j-components-react
```

> Let me know if there is a component you would like me to implement
>
> Components: Search Dropdown, Sortable Table, Dropdown, Toggle, Button

## Usage

> Search Dropdown

```tsx
import React, { useCallback } from 'react'
import { SearchDropdown } from 'j-components-react'

const items = [
  { id: '1', text: 'Blue', value: 'bl' },
  { id: '2', text: 'Yellow', value: 'ye' },
  { id: '3', text: 'Green', value: 'gr' },
  { id: '4', text: 'Red', value: 're' },
  { id: '5', text: 'Purple', value: 'pu' }
]

const App = () => {
  const handleClick = useCallback((item) => {
    console.log('logging clicked item', item)
    // {id: "4", text: "Red", value: "re"}
  }, [])
  return (
    <div className='App'>
      <SearchDropdown items={items} defaultValue={'Red'}>
        {items.map((item) => (
          <SearchDropdown.Item
            key={item.id}
            filterKey={item.id} // required
            onClick={handleClick} // optional
          >
            {item.text}
          </SearchDropdown.Item>
        ))}
      </SearchDropdown>
    </div>
  )
}
```

> Sortable Table

```tsx
import React from 'react'
import { Table } from 'j-components-react'

const items = [
  { name: 'Alexis', age: 29, location: 'New York' },
  { name: 'Rachel', age: 25, location: 'Texas' },
  { name: 'Ben', age: 27, location: 'Nevada' },
  { name: 'Jack', age: 35, location: 'Alabama' },
  { name: 'Max', age: 38, location: 'California' },
  { name: 'Jessica', age: 37, location: 'Florida' }
]

const headerCells = ['name', 'age', 'location']

const TableExample = () => {
  return <Table items={items} headerCells={headerCells} />
}
```

## License

MIT © [justinhessdev](https://github.com/justinhessdev)
