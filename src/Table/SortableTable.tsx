import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Table } from './Table'
import { StyledTable } from './Table.styled'

// const tableItems = [
//   { name: 'Justin', age: '32', location: 'New York' },
//   { name: 'Aaron', age: '35', location: 'New York' },
//   { name: 'Ben', age: '30', location: 'Los Angeles' }
// ]

interface ISortableTableProps {
  items: Array<object>
  headerCells: Array<string> | undefined
}

export const SortableTable = ({
  items,
  headerCells = []
}: ISortableTableProps) => {
  const [sortedRows, setRows] = useState<any>([])
  const tableRef = useRef<any>()

  useEffect(() => {
    const rows = items.map((item) => ({ id: uuidv4(), ...item }))
    // console.log('loggign rows', rows)
    setRows(rows)
  }, [items, setRows])

  const cells = headerCells.map((header) => ({
    id: uuidv4(),
    value: header
  }))

  const handleSort = () => {
    const newArr = [...sortedRows]
    const sortRows = newArr.sort((a, b) => {
      var nameA = a.name.toUpperCase() // ignore upper and lowercase
      var nameB = b.name.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      // names must be equal
      return 0
    })
    setRows(sortRows)
  }

  return (
    <StyledTable data-testid='component-sortable-table'>
      <Table.Header>
        <Table.Row>
          {cells.map((cell) => (
            <Table.HeaderCell
              key={cell.id}
              onClick={() => handleSort()}
              data-testid={cell.value === 'name' ? 'header-cell-name' : ''}
            >
              {cell.value}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedRows.map((row) => (
          <Table.Row key={row.id}>
            {cells.map((cell) => (
              <Table.Cell key={cell.id}>{row[cell.value] || ''}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </StyledTable>
  )
}
