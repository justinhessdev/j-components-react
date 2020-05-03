# j-components-react

> Easy-to-use React component library tailored to the end user

[![NPM](https://img.shields.io/npm/v/j-components-react.svg)](https://www.npmjs.com/package/j-components-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save j-components-react
```

## Usage

```tsx
import React, { useCallback } from 'react'
import { SearchDropdown } from 'j-components-react'
import 'j-components-react/dist/index.css'

const items = [
  { id: '1', text: 'Blue', value: 'bl' },
  { id: '2', text: 'Yellow', value: 'ye' },
  { id: '3', text: 'Green', value: 'gr' },
  { id: '4', text: 'Red', value: 're' },
  { id: '5', text: 'Purple', value: 'pu' }
]

const App = () => {
  const handleClick = useCallback((val) => {
    console.log('logging clicked item', val) // {id: "4", text: "Red", value: "re"}
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

## License

MIT © [justinhessdev](https://github.com/justinhessdev)
