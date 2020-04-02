export default (state, { type, payload }) => {
  switch (type) {

    case "ADD-TO-NEW-UPDATE":
      return {
        ...state, tables: [...state.tables.map((table, i) => {
          if (i === payload.table_index) {
            const updates = state.tables[payload.table_index].new_updates
            table.new_updates = { ...updates, [payload.id]: { ...updates[payload.id], [payload.name]: payload.value } }
            return table
          }
          return table
        })]
      }
    case "DELETE-FROM-NEW-UPDATE":
      return {
        ...state, tables: [...state.tables.map((table, i) => {
          if (i === payload.table_index) {
            const updates = state.tables[payload.table_index].new_updates
            delete updates[payload.id][payload.name]
            if (Object.keys(updates[payload.id]).length === 0) {
              delete updates[payload.id]
            }
            table.new_updates = { ...updates }
            return table
          }
          return table
        })]
      }
    case "UPDATE-COLUMN":
      state.tables[payload.table_index].columns[payload.column_index] = payload.value
      return { ...state }
    default:
      return state
  }
}