import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;

  tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  thead tr,
  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }

  th,
  td {
    padding: 16px;
    text-align: left;
  }

  thead tr th {
    cursor: pointer;

    :hover {
      box-shadow: 0 1px 2px 0 #ddd;
    }
  }
`
type THeaderValue = {
  isActive: boolean
  direction: string
}

export const HeaderValue = styled.div<THeaderValue>`
  &::after {
    content: ' ';
    display: inline-block;
    width: 2em;
    height: 1em;
    background-image: ${({ isActive, direction }) =>
      setBackgroundImage(isActive, direction)};
    background-position: ${({ isActive }) =>
      isActive &&
      'calc(12px) calc(1em - 7px), calc(100% - 10px) calc(1em - 7px)'};
    background-size: 5px 5px, 5px 5px, 1px 25px;
    background-repeat: no-repeat;
  }
`

function setBackgroundImage(isActive: boolean, direction: string) {
  if (isActive && direction === 'ASC') {
    return 'linear-gradient(45deg, transparent 50%, #909090 50%), linear-gradient(135deg, #909090 50%, transparent 50%)'
  } else if (isActive && direction === 'DESC') {
    return 'linear-gradient(135deg, transparent 50%, #909090 50%), linear-gradient(45deg, #909090 50%, transparent 50%)'
  }

  return 'none'
}
