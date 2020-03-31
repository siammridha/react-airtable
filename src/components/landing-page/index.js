import React, { useState } from 'react'
import styles from './styles.module.css'
import { useSelector } from "react-redux"
import Table from "../table"

const LandingPage = () => {
    const tables = useSelector(state => state.tables)
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {tables.map((table, i) => {
                    return <button key={table.id} className={styles.tab} onClick={() => setCurrentTab(i)}>{table.name}</button>
                })}
                <button className={styles.create_table_button}>+</button>
            </div>
            <Table table_index={currentTab} />
        </div>
    )
}

export default React.memo(LandingPage)