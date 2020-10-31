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
      return sortDesc ? (_.toString(r1[index])).localeCompare(
          _.toString(r2[index])) : (_.toString(r2[index])).localeCompare(
          _.toString(r1[index]))
    });
    setRows([...sortedRows])
  }

  return (
      <table>
        <thead style={{backgroundColor: 'yellow', fontWeight: 'bold'}}>
        <tr>
          {header.map(
              (col, index) => <td key={"h" + index}
                                  onClick={() => sortByMe(index)}>{col}</td>)}
        </tr>
        </thead>
        <tbody>
        {
          rows.map((row, index) => {
            return <tr key={"r" + index}>
              {
                row.map((cell) => <td key={cell}>{cell}</td>)
              }
            </tr>
          })
        }
        </tbody>

      </table>
  )

}