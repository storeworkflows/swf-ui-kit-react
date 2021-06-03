export const choiceColumnQuery = `query($table: String!, $column: String!) {
    GlideChoiceColumn_Query {
          choices: getChoiceFields(table: $table, column: $column) {
        rawValue,
        displayValue,
        isDisabled
      }
    }
  }`;
  
  const fragments = ({includeHighlightedData}) => `
    fragment rowQuery on GlideListLayout_QueryRowType {
      className
      uniqueId
      displayValue
      rowData {
        columnName
        columnData {
          displayValue
          value
          documentIdReference
        }
      }
      ${
              includeHighlightedData
                  ? `highlightedData @include(if: $runHighlightedValuesQuery){
          field
          value
          status
          showIcon
        }`
                  : ''
          }
      dbViewData {
        tableKey
        uniqueId
      }
    }
    `;
  
  const groupedRow = `
    ... on GlideListLayout_GroupedQueryRowType {
      displayValue
      value
      field
      aggregateQuery
      groupChoiceTable
      count
      query {
        ...rowQuery
      }
    }
  `;
  
  const singleRow = `
    ... on GlideListLayout_QueryRowType {
      ...rowQuery
    }`;
  
  const daData = `
      toolTip
      buttonType
      recordSelectionRequired
      confirmationRequired
      confirmationMessage
      assignmentId
      table
      view
      name
      icon
      label
      dependency
      requiresValue
      order
      modelFieldRequired
      groupBy
      group
      actionType
      actionComponent: actionComponentTag
      actionAttributes
      actionDispatch
      actionPayload
      modelConditions {
        field
        operator
        value
        newQuery
        or
      }
      payloadMap {
        name
        value
      }
  `;
  
  const singleButton = `
    ... on GlideListLayout_DeclarativeActionModelType {
      ${daData}
  }`;
  
  const groupedButton = `
    ... on GlideListLayout_DeclarativeActionGroupType {
      group
      groupId
      order
      groupedActions {
        ${daData}
      }
  }`;
  
  const listLayoutQueryFragment = `
  fragment listLayoutQuery on GlideListLayout_ListLayoutQueryType {
    encodedQuery
    table
    orderByColumn
    orderByIsDescending
    allSysIds
    count
    groupCount
    isChoiceAggregate
    isOmitCount
    liveLists @include(if: $disableLiveList)
  
    omitCountData {
      hasNextPage
      omitCountRowCount
    }
    queryRows {
      ${groupedRow}
      ${singleRow}
    }
  }
  `;
  
  const referenceListLayoutQueryFragment = `
  fragment referenceListLayoutQuery on GlideListLayout_ReferenceListLayoutQueryType {
    encodedQuery
    table
    orderByColumn
    orderByIsDescending
    allSysIds
    count
    queryRows {
      ${groupedRow}
      ${singleRow}
    }
  }
  `;
  
  const commonQuery = (layoutQuery = 'listLayoutQuery') => `
  metadata @include(if: $runQuery) {
    isDBView
    isScriptableTable
    isGrouped
    groupedColumn
    groupByDisplayValue
  }
  preferences @include(if: $runQuery) {
    name
    value
  }
  tiny
  query
  listTitle
  listId
  listAttributes @include(if: $runQuery)
  allColumns @include(if: $runQuery) {
    columnName
    columnData {
      label
      internalType
      isFilterable
      isSortable
      isGroupable
      isChoice
      elementSysId
      tableName
      isFirstNonRef
    }
    internalType
  }
  declarativeActions @include(if: $isDeclarativeActionsRequired){
        ${singleButton}
        ${groupedButton}
  }
  queryCategory
  layoutQuery {
    ...${layoutQuery}
  }
    `;
  
  export const tinyListModel = `
    query($tiny: String!, $runQuery: Boolean!, $isDeclarativeActionsRequired:Boolean!, $runHighlightedValuesQuery:Boolean!, $limit: Int, $offset: Int, $disableLiveList: Boolean!) {
      GlideListLayout_Query {
        getTinyListLayout(tiny: $tiny, runQuery: $runQuery, isDeclarativeActionsRequired: $isDeclarativeActionsRequired, runHighlightedValuesQuery:$runHighlightedValuesQuery, limit:$limit, offset:$offset) {
          ${commonQuery('listLayoutQuery')}
        }
      }
    }
    ${fragments({includeHighlightedData: true})}
    ${listLayoutQueryFragment}
  `;
  
  export const listQueryModel = `
  query ($columns: String, $listId: String, $maxColumns: Int, $limit: Int, $offset: Int, $groupedOffset: Int, $parentRecordSysId: String, $parentTable: String, $query: String, $workspaceConfigId: String, $relatedListName: String, $source: String, $runQuery: Boolean!,$table: String!, $view: String, $runHighlightedValuesQuery: Boolean!, $isDeclarativeActionsRequired: Boolean!, $tiny: String, $queryCategory: String, $listTitle: String, $disableLiveList: Boolean!) {
    GlideListLayout_Query {
      getListLayout(columns: $columns  listId: $listId, maxColumns: $maxColumns, limit: $limit, offset: $offset, groupedOffset: $groupedOffset, parentRecordSysId: $parentRecordSysId, parentTable: $parentTable,workspaceConfigId: $workspaceConfigId, query: $query, relatedListName: $relatedListName, source: $source, runQuery: $runQuery,table: $table, view: $view, runHighlightedValuesQuery: $runHighlightedValuesQuery, isDeclarativeActionsRequired: $isDeclarativeActionsRequired, tiny: $tiny, queryCategory: $queryCategory, listTitle: $listTitle) {
          ${commonQuery('listLayoutQuery')}
        }
      }
    }
    ${fragments({includeHighlightedData: true})}
    ${listLayoutQueryFragment}
    `;
  
  export const referenceListModel = `
  query ($table: String!, $field: String! , $sysId: String, $encodedRecord: String, $serializedChanges: String, $chars:String!, $limit: Int!, $offset:Int!, $sortBy: String, $sortDescending: Boolean, $searchOperator: String, $query: String$skipRecent: Boolean,$sysparm_ref_override:String,$sysparm_additional_qual: String,$sysparm_exact_match: Boolean, $runQuery: Boolean!, $isDeclarativeActionsRequired: Boolean!, $tiny: String, $queryCategory: String, $ignoreRefQual: Boolean) {
    GlideListLayout_Query {
      getReferenceListLayout(table: $table,field: $field,sysId: $sysId,encodedRecord: $encodedRecord,serializedChanges: $serializedChanges,chars:$chars,limit: $limit,offset:$offset,sortBy: $sortBy,sortDescending: $sortDescending,searchOperator: $searchOperator,query: $query,skipRecent: $skipRecent,sysparm_ref_override:$sysparm_ref_override,sysparm_additional_qual: $sysparm_additional_qual,sysparm_exact_match: $sysparm_exact_match, runQuery: $runQuery, tiny: $tiny, queryCategory: $queryCategory, ignoreRefQual: $ignoreRefQual) {
        ${commonQuery('referenceListLayoutQuery')}
      }
    }
  }
  ${fragments({includeHighlightedData: false})}
  ${referenceListLayoutQueryFragment}
  `;