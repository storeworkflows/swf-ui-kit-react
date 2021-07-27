export const query = `
query($table: String!, $query: String, $field: String) {
  xAaro2Swf {
      referenceList {
          getListItems(table: $table, query: $query, field: $field) {
              sys_id,
              value
          }
      }
  }
}
`;