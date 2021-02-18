export const query = `
query ($table: String!, $field: String!, $sys_id: String, $encodedRecord: String, $serializedChanges: String, $chars: String!, $ignoreRefQual: Glide_Boolean, $paginationLimit: Int, $paginationOffset: Int, $sortBy: String ) {
  GlideLayout_Query {
    referenceDataRetriever(
      tableName: $table,
      fieldName: $field,
      encodedRecord: $encodedRecord,
      serializedChanges: $serializedChanges,
      pagination: {limit: $paginationLimit, offset: $paginationOffset},
      ignoreTotalCount: true,
      sysId: $sys_id, chars: $chars,
      sysparm_ignore_ref_qual: $ignoreRefQual,
      sortBy: $sortBy ) {
      totalCount
      recentCount
      matchesCount
      referenceRecentDataList {
        sysId
        referenceData {
          key
          value
        }
      }
      referenceDataList {
        sysId
        referenceData {
          key
          value
        }
      }
    }
  }
}
`;