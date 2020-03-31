import React, { useState } from 'react'
import { useSelector } from "react-redux"
import styles from './styles.module.css'
import Menu from '../column-menu'

const Column = ({ metadata }) => {
    const { table_index, column_index, table } = metadata
    const [menu, toggleMenu] = useState(false)
    const column = useSelector(state => state.tables[table_index].columns[column_index])

    return (
        <div className={styles.column} style={{ width: column.width }}  >
            <p className={styles.name}>{column.name}</p>
            <button className={styles.menu_toggle_button} onClick={() => toggleMenu(true)}>^</button>
            <div className={styles.resize_bar}></div>
            {menu && <Menu metadata={{ column_index, initialColumnValue: column, table, table_index }} closeMenu={() => toggleMenu(false)} />}
        </div>
    )
}

export default React.memo(Column)