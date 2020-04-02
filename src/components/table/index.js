import React from 'react'
import styles from './styles.module.css'
import Rows from '../rows'
import Column from '../column'
import { useSelector } from "react-redux"

const Table = ({ table_index }) => {
    const table = useSelector(state => state.tables[table_index])
    const updates = useSelector(state => state.tables[table_index].new_updates)
    const columns = table.columns

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
            <Rows table_index={table_index} />
            <button disabled={Object.values(updates).length === 0}>Update</button>
        </div>
    )
}

export default React.memo(Table)