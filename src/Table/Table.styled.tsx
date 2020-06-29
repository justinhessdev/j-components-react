import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  th,
  td {
    padding: 16px;
  }

  thead tr th {
    text-align: left;
    cursor: pointer;
    position: relative;

    :hover {
      box-shadow: 0 1px 2px 0 #ddd;
    }
  }
`
