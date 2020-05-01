# j-components-react

> Easy-to-use React component library tailored for the end user&nbsp;
> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/j-components-react.svg)](https://www.npmjs.com/package/j-components-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save j-components-react
```

## Usage

```jsx
import React, { Component } from 'react'

import { SearchDropdown } from 'j-components-react'
import 'j-components-react/dist/index.css'

const Example = ({ items }) => (
      <SearchDropdown items={items} defaultValue={'Scooby Doo'}>
        {items.map((item) => (
          <SearchDropdown.Item key={item.id} filterKey={item.id}>
            {item.text}
          </SearchDropdown.Item>
        ))}
      </SearchDropdown>
    )
  }
}
```

## License

MIT © [justinhessdev](https://github.com/justinhessdev)
