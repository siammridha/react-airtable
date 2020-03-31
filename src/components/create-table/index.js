import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import styles from './styles.module.css'
import axios from 'axios'

const LandingPage = () => {
    const user = useSelector(state => state.user)

    return (
        <div className={styles.modal}>
            <div className={styles.form}>
                <input name='' />

                <button className={styles.submit}>Create Table</button>
            </div>
        </div>
    )
}

export default React.memo(LandingPage)