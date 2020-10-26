import React, {useState} from 'react'

var _ = require('lodash');

export const SortableTable = (props) => {
  const {data} = props;
  const [header, setHeader] = useState(data.shift())
  const [rows, setRows] = useState(data);
  const [sortDesc, setSortDesc] = useState(true)

  const sortByMe = (index) => {
    setSortDesc(!sortDesc)
    const sortedRows = rows.sort((r1, r2) => {
      return sortDesc? (_.toString(r1[index])).localeCompare(
          _.toString(r2[index])) : (_.toString(r2[index])).localeCompare(
          _.toString(r1[index]))
    });
    setRows([...sortedRows])
  }

  return (
      <table>
        <thead style={{backgroundColor: 'yellow', fontWeight: 'bold'}}>
        {header.map(
            (col, index) => <td onClick={() => sortByMe(index)}>{col}</td>)}
        </thead>
        <tbody>
        {
          rows.map((row) => {
            return <tr>
              {
                row.map((cell) => <td>{cell}</td>)
              }
            </tr>
          })
        }
        </tbody>

      </table>
  )

}