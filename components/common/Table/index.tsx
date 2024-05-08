import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'


interface ICustomTableProps {
  columns: Array<{ key: string, label: ReactNode, onClick?: (event: React.MouseEvent<HTMLElement>) => void, thCls?: string, tdCls?: string }>
  data: Array<any>
  rootTableCls?: string
  theadCls?: string
  tbodyCls?: string
}

function CustomTable(props: ICustomTableProps) {
  const { columns, data, rootTableCls, theadCls, tbodyCls } = props
  return (
    <div className='max-w-full overflow-x-auto shadow-lg'>
      <table className={twMerge("table-auto w-full rounded-[inherit] ", rootTableCls)}>
        <thead className={twMerge("w-auto", theadCls)}>
          <tr className='divide-x divide-x-black w-auto'>
            {
              columns.map((col, index) => {
                const { label, key, onClick, thCls } = col
                return (
                  <th key={`${index}-${key}`} scope='col' onClick={onClick} className={twMerge("text-base text-left  whitespace-nowrap font-medium px-2 py-1 w-auto", thCls)}>{label}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody className={twMerge("w-auto", tbodyCls)}>
          {
            data.map((item, index) => {
              return (
                <tr key={`tr-data-${index}`} className={twMerge("w-auto divide-x divide-x-black")}>
                  {
                    columns.map((col, index) => {
                        return (
                          <td key={`td-key-${col.key}-${index}`} className={twMerge("px-2 py-1 w-auto", col.tdCls)}>
                            {
                              item[col.key]??""
                            }
                          </td>
                        )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable
