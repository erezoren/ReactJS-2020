import React from 'react'

export const SortableTable = (props) => {
  const {data} = props;

  return (
      <table>
        <th>
          {data[0].map(col => <td>{col}</td>)}
        </th>
        <tbody>
        {
          data.map(rows => rows.map((row) => {
            <td>{row}</td>
          }))
        }
        </tbody>

      </table>
  )

}