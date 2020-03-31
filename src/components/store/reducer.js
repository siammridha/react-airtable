export default (state, { type, payload }) => {
  switch (type) {
    case "UPDATE-CELL":
      state.tables[payload.table_index].rows[payload.row_index][payload.column_index] = payload.value
      return { ...state };
    case "UPDATE-COLUMN":
      state.tables[payload.table_index].columns[payload.column_index] = payload.value
      return { ...state }
    default:
      return state
  }
}