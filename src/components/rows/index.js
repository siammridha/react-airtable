import React from 'react'
import styles from './styles.module.css'
import Cell from '../cell'
import { useSelector } from "react-redux"

const Rows = ({ table_index }) => {
    const table = useSelector(state => state.tables[table_index])
    const columns = table.columns
    const rows = table.rows

    return (
        <React.Fragment>
            {rows.map((row, i) => {
                return <div key={i} className={styles.row}>
                    <div className={styles.first_cell}>{i + 1}</div>
                    {columns.map((column, j) => {
                        return <Cell
                            key={`${i}${j}`}
                            row={row[j]}
                            name={column.name}
                            width={column.width}
                            maxLength={column.length}
                            id={row[row.length - 1]}
                            table_index={table_index}
                        />
                    })}
                </div>
            })}
            <button className={styles.first_cell} >+</button>
        </React.Fragment>
    )
}

export default React.memo(Rows)