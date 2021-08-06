export const query = `
query($table: String!, $searchFields: [String!]!, $value: String) {
  xAaro2Swf {
      referenceList {
          getListItems(table: $table, searchFields: $searchFields, value: $value) {
              sys_id,
              value
          }
      }
  }
}
`;
