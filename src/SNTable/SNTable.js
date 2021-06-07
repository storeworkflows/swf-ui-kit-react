import { useEffect, useState, useCallback } from "react";
import propTypes from "prop-types";
import TableContainer from "../Table";
import { listQueryModel } from "./shemas";
import useGraphQL from "../utils/useGraphQL";
import { noop } from "../utils";

const SNTable = (props) => {
  const {
    table = "incident",
    view = "default",
    query = "",
    paginationTop,
    paginationBottom,
    onClick,
  } = props;

  const [headers, setHeaders] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const { loading, data } = useGraphQL(
    {
      operationName: "nowRecordListConnected",
      query: listQueryModel,
      variables: {
        table: table,
        view: view,
        columns: "",
        query: query,
        limit: limit,
        offset: offset,
        queryCategory: "list",
        workspaceConfigId: "",
        runHighlightedValuesQuery: true,
        runQuery: true,
        isDeclarativeActionsRequired: false,
        source: "list",
        disableLiveList: true,
      },
    },
    [table, view, query, offset, limit]
  );

  const handleLimit = useCallback(
    (value) => {
      setLimit(value);
    },
    [setLimit]
  );

  const handleOffset = useCallback(
    (value) => {
      setOffset(value);
    },
    [setOffset]
  );

  useEffect(() => {
    if (!data) return;

    const { allColumns, layoutQuery } = _.get(
      data,
      "[0].data.GlideListLayout_Query.getListLayout"
    );

    const headers = allColumns.map(({ columnData, columnName }) => {
      const { label } = columnData;

      return {
        label,
        key: columnName,
      };
    });
    const dataSource = layoutQuery.queryRows.map(({ className, rowData, uniqueId }) => {
      const dataSource = rowData.reduce((acc, { columnName, columnData }) => {
        acc[columnName] = columnData.displayValue;
        return acc;
      }, {});
      dataSource["onClick"] = () => {
        onClick({ table: className, sys_id: uniqueId });
        return { table: className, sys_id: uniqueId };
      };
      return dataSource;
    });

    setTotal(layoutQuery.count);
    setHeaders(headers);
    setDataSource(dataSource);
  }, [data]);

  return (
    <TableContainer
      name={table}
      headers={headers}
      dataSource={dataSource}
      offsetChanged={handleOffset}
      peerPageChanged={handleLimit}
      total={total}
      loading={loading}
      paginationTop={paginationTop}
      paginationBottom={paginationBottom}
    />
  );
};

SNTable.defaultProps = {
  onClick: noop
}

SNTable.propTypes = {
  table: propTypes.string,
  view: propTypes.string,
  query: propTypes.string,
  paginationTop: propTypes.shape({
    alignment: propTypes.oneOf(["start", "center", "end", "none"]),
  }),
  paginationBottom: propTypes.shape({
    alignment: propTypes.oneOf(["start", "center", "end", "none"]),
  }),
  onClick: propTypes.func,
};

export default SNTable;
