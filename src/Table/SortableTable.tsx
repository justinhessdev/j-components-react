import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Table } from './Table'
import { StyledTable, HeaderValue } from './Table.styled'

interface ISortableTableProps {
  items: Array<object>
  headerCells: Array<string> | undefined
}

interface IHeader {
  id: string
  value: string
}

export const SortableTable = ({
  items,
  headerCells = []
}: ISortableTableProps) => {
  const [sortedRows, setRows] = useState<any>([])
  const [headers, setHeaders] = useState<any>([])
  const [activeHeader, setActiveHeader] = useState<string>('')
  const [lastDirection, setDirection] = useState<string>('DESC')

  useEffect(() => {
    const cells = headerCells.map((header) => ({
      id: uuidv4(),
      value: header
    }))
    setHeaders(cells)
  }, [headerCells, setHeaders])

  useEffect(() => {
    const rows = items.map((item) => ({ id: uuidv4(), ...item }))
    setRows(rows)
  }, [items, setRows])

  const handleSort = (val: string) => {
    setActiveHeader(val)
    const newArr = [...sortedRows]
    const sortRows = newArr.sort((a, b) => {
      let valueA = a[val]
      let valueB = b[val]

      if (typeof valueA === 'string') {
        valueA = a[val].toUpperCase() // ignore upper and lowercase
      }

      if (typeof valueB === 'string') {
        valueB = b[val].toUpperCase() // ignore upper and lowercase
      }

      // if ASC set to DESC
      if (lastDirection === 'ASC') {
        setDirection('DESC')
        if (valueA < valueB) {
          return 1
        }
        if (valueA > valueB) {
          return -1
        }

        // names must be equal
        return 0
      }

      // otherwise DESC so set ASC
      setDirection('ASC')
      if (valueA < valueB) {
        return -1
      }
      if (valueA > valueB) {
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
          {headers.map((header: IHeader) => (
            <Table.HeaderCell
              key={header.id}
              onClick={() => handleSort(header.value)}
            >
              <HeaderValue
                className='header-content'
                isActive={activeHeader === header.value}
                direction={lastDirection}
              >
                {header.value}
              </HeaderValue>
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedRows.map((row: any) => (
          <Table.Row key={row.id}>
            {headers.map((header: IHeader) => (
              <Table.Cell key={header.id}>{row[header.value] || ''}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </StyledTable>
  )
}
