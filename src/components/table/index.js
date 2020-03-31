import React from 'react'
import styles from './styles.module.css'
import Cell from '../cell'
import Column from '../column'
import { useSelector } from "react-redux"

const Table = ({ table_index }) => {
    const table = useSelector(state => state.tables[table_index])
    const columns = table.columns
    const rows = table.rows

    return (
        <div className={styles.table}>
            <div className={styles.columns}>
                <div className={styles.column} >
                    <input type="checkbox" />
                </div>
                {columns.map((column, i) => {
                    return <Column
                        key={column.column_id}
                        metadata={{ column_index: i, column, table, table_index }}
                    />
                })}
                <button className={styles.column} >+</button>
            </div>
            <div className={styles.rows}>
                {rows.map((row, i) => {
                    return <div key={i} className={styles.row}>
                        <div className={styles.cell}>{i + 1}</div>
                        {columns.map((column, j) => {
                            return <Cell
                                key={`${i}${j}`}
                                metadata={{ table_index, row_index: i, column_index: j, row, column, table }}
                            />
                        })}
                    </div>
                })}
                <div className={styles.row}>
                    <button className={styles.cell} >+</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Table)