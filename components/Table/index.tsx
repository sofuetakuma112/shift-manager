import React from 'react'

export type Row = (string | number)[]

type Props = {
  columnNames: string[]
  rows: Row[]
}

export const Table: React.FC<Props> = ({ columnNames, rows }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-compact w-full'>
        <thead>
          <tr>
            {columnNames.map((columnName, i) => (
              <th key={`th-${i}`}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, j) => (
            <tr key={`tr-${j}`}>
              {row.map((cell, k) => (
                <td key={`td-${k}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </tfoot> */}
      </table>
    </div>
  )
}
