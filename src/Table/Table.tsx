import React, { useContext } from 'react'
import { StyledTable } from './Table.styled'
import { SortableTable } from './SortableTable'

interface ITableContext {
  rows: string[][]
}

const TableContext = React.createContext({} as ITableContext)
TableContext.displayName = 'TableContext'

function useTableContext() {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error(
      `Table compound components cannot be rendered outside the Table component`
    )
  }
  return context
}

interface ITableProps {
  children?: JSX.Element[] | JSX.Element
  headerCells?: Array<string> | undefined
  items?: Array<object>
}

export const Table = ({ children, items, headerCells }: ITableProps) => {
  if (items && items.length > 0) {
    return <SortableTable items={items} headerCells={headerCells} />
  }

  return <StyledTable data-testid='component-table'>{children}</StyledTable>
}

function Header({ children }: any) {
  useTableContext()
  return <thead>{children}</thead>
}

function Body({ children }: any) {
  useTableContext()
  return <tbody>{children}</tbody>
}

function Footer({ children }: any) {
  useTableContext()
  return <tfoot>{children}</tfoot>
}
function Row({ children }: any) {
  useTableContext()
  return <tr>{children}</tr>
}

function HeaderCell({ children, onClick, ...rest }: any) {
  useTableContext()
  // I use rest['data-testid'] so I can pass test ids in my test file Table.test.tsx
  //   console.warn('logging rest', rest)
  return (
    <th data-testid={rest['data-testid']} onClick={onClick} {...rest}>
      {children}
    </th>
  )
}

function Cell({ children, ...rest }: any) {
  useTableContext()
  return <td data-testid={rest['data-testid']}>{children}</td>
}

Table.Header = Header
Table.Body = Body
Table.Footer = Footer
Table.Row = Row
Table.HeaderCell = HeaderCell
Table.Cell = Cell
