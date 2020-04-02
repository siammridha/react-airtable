import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'

const Cell = ({ row, name, width, id, table_index }) => {
    const [cell, updateCell] = useState(row)
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()

    const onChange = (e) => {
        const value = e.target.value
        if (row !== value) {
            dispatch({ type: 'ADD-TO-NEW-UPDATE', payload: { table_index, id, name, value } })
        } else {
            dispatch({ type: 'DELETE-FROM-NEW-UPDATE', payload: { table_index, id, name } })
        }
        updateCell(e.target.value)
    }

    return (
        <React.Fragment>
            {active ?
                <input
                    className={styles.cell}
                    style={{ width }}
                    value={cell}
                    name={name}
                    autoFocus={true}
                    onBlur={() => setActive(false)}
                    onChange={onChange}
                /> :
                <div
                    className={styles.cell}
                    style={{ width }}
                    onDoubleClick={() => setActive(true)}
                >{cell}</div>
            }
            {console.log(cell)}
        </React.Fragment>
    )
}

export default React.memo(Cell)