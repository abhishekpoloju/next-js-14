import React, { ReactNode } from 'react'

interface ITableGridProps {
  columns: Array<{ key: string, value: ReactNode }>,
  data: Array<{ key: string, value: ReactNode }>,
}

function TableGrid({
  columns, data
}: ITableGridProps) {
  return (
    <div className=''>
      {
        data.map((data, index) => (
          <div key={`${index}-row-${data.key}`} className='grid h-full w-full overflow-x-auto'>

          </div>
        ))
      }
    </div>
  )
}

export default TableGrid