import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import styles from './styles.module.css'

const Cell = ({ metadata }) => {
    const { table_index, row_index, column_index, table, row, column } = metadata
    const cell = useSelector(state => state.tables[table_index]['rows'][row_index][column_index])
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()

    const onChange = (e) => {
        const value = e.target.value
        dispatch({ type: "UPDATE-CELL", payload: { table_index, column_index, row_index, value } })
    }
    return (
        <React.Fragment>
            {active ?
                <input
                    className={styles.cell}
                    style={{ width: column.width }}
                    value={cell}
                    autoFocus={true}
                    onBlur={() => setActive(false)}
                    onChange={onChange}
                /> :
                <div
                    className={styles.cell}
                    style={{ width: column.width }}
                    onDoubleClick={() => setActive(true)}
                >{cell}</div>
            }
            {console.log(cell)}
        </React.Fragment>
    )
}

export default React.memo(Cell)