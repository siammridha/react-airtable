import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'

const ColumnMenu = ({ metadata, closeMenu }) => {
    const { table_index, column_index, table, initialColumnValue } = metadata
    const menu = useRef()
    const relation_tables = useSelector(state => state.tables.filter(link_table => link_table.id !== table.id))
    const dataTypes = useSelector(state => state.data_types)
    const [column, updateColumnValue] = useState({ ...initialColumnValue })
    const dispatch = useDispatch()

    const handleColumnUpdate = () => {
        if (JSON.stringify(initialColumnValue) !== JSON.stringify(column)) {
            dispatch({ type: "UPDATE-COLUMN", payload: { table_index, column_index, value: column } })
            closeMenu()
        } else {
            closeMenu()
        }
    }

    const onChange = (e) => {
        let value = e.target.value
        if (e.target.type === 'checkbox') {
            value = e.target.checked
        }
        const key = e.target.name
        updateColumnValue({ ...column, [key]: value })
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menu.current && !menu.current.contains(event.target)) {
                closeMenu()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            updateColumnValue(initialColumnValue)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [menu, closeMenu, initialColumnValue])

    return (
        <div className={styles.column_menu} ref={menu}>
            <div>Name:
                <input name='name' value={column.name} onChange={onChange} />
            </div>

            <div>Data Type:
                <select name='type' defaultValue={column.type} onChange={onChange}>
                    {dataTypes.map((dataType, i) => <option key={i} value={dataType}>{dataType}</option>)}
                </select>
            </div>
            {column.type === 'foreign key' ? <div>
                <div>Link To:
                    <select name='relation_to' defaultValue={column.relation_to} onChange={onChange}>
                        <option value=''>Select on table</option>
                        {relation_tables.map((relation_table, i) => <option key={i} value={relation_table.id}>{relation_table.name}</option>)}
                    </select>
                </div>
                {column.relation_to && <React.Fragment>
                    <div>one to one:
                <input type='radio' name='relation_type' value='one_to_one' onChange={onChange} checked={column.relation_type === 'one_to_one'} />
                    </div>
                    <div>one to many:
                <input type='radio' name='relation_type' value='one_to_many' onChange={onChange} checked={column.relation_type === 'one_to_many'} />
                    </div>
                    <div>many to many:
                <input type='radio' name='relation_type' value='many_to_many' onChange={onChange} checked={column.relation_type === 'many_to_many'} />
                    </div>
                </React.Fragment>}
            </div> :
                <div>
                    <div>Length:
                <input type='number' name='length' value={column.length} onChange={onChange} />
                    </div>

                    <div>Nullable:
                <input type='checkbox' name='not_null' checked={column.not_null} onChange={onChange} />
                    </div>

                    <div>Default Value
                <input name='default_value' value={column.default_value} onChange={onChange} />
                    </div>
                </div>
            }
            <button className={styles.menu_update_button} onClick={handleColumnUpdate}>Update</button>
        </div>
    )
}

export default React.memo(ColumnMenu)