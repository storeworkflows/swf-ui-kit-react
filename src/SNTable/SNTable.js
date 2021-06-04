import { useEffect, useRef, useState, useCallback } from "react"
import TableContainer from "../Table";
import {listQueryModel} from "./shemas";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";

const SNTable = (props) => {
    const {
        table = "incident",
        view = "default",
        query = ""
    } = props;

    const [headers, setHeaders] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [limit, setLimit] = useState(50);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);

    const controllerRef = useRef(null);

    const fetchTableRecords = async () => {
        const response = await graphqlRequest({
            operationName: "nowRecordListConnected",
            query: listQueryModel,
            variables: {
                'table': table,
                'view': view,
                'columns': "",
                'query': query,
                'limit': limit,
                'offset': offset,
                'queryCategory': "list",
                'workspaceConfigId': "",
                'runHighlightedValuesQuery': true,
                'runQuery': true,
                'isDeclarativeActionsRequired': false,
                'source': "list",
                'disableLiveList': true
            },
            params: {
                signal: controllerRef.current.signal
            }
        });

       const data = await response.json();

        const {allColumns, layoutQuery} = _.get(data, "[0].data.GlideListLayout_Query.getListLayout");

        const headers = allColumns.map(({columnData, columnName}) => {
            const {label} = columnData;

            return {
                label,
                key: columnName
            }
        })
        
        const dataSource = layoutQuery.queryRows.map(({rowData}) => {
            return rowData.reduce((acc, {columnName, columnData}) => {
                acc[columnName] = columnData.displayValue;
                return acc;
            }, {})
        });

        setTotal(layoutQuery.count);
        setHeaders(headers);
        setDataSource(dataSource);
    }

    const handleLimit = useCallback(
        (value) => {
            setLimit(value);
        },
        [setLimit],
    )

    const handleOffset = useCallback(
        (value) => {
            setOffset(value)
        },
        [setOffset],
    )

    useEffect(() => {
        if (controllerRef?.current) {
            controllerRef.current.abort();
        }
        controllerRef.current = new AbortController();
        fetchTableRecords();
    }, [table, view, query, offset, limit]);

    return <TableContainer headers={headers} dataSource={dataSource} offsetChanged={handleOffset} peerPageChanged={handleLimit} total={total} />
}
export default SNTable