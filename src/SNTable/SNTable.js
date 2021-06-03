import { useEffect, useRef } from "react"
import TableContainer from "../Table";
import {listQueryModel} from "./shemas";
import graphqlRequest from "../utils/graphqlRequest/graphqlRequest";

const SNTable = (props) => {
    const {
        table = "incident",
        view = "default",
        query = ""
    } = props;

    const controllerRef = useRef(null);

    const fetchTableRecords = async () => {
console.log({listQueryModel});

        const response = await graphqlRequest({
            operationName: "nowRecordListConnected",
            query: listQueryModel,
            variables: {
                'table': table,
                'view': view,
                'columns': "",
                'query': query,
                'limit': 50,
                'offset': 0,
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
        const data = response.json()
        console.log("SNTable", {data});
    }

    useEffect(() => {
        if (controllerRef?.current) {
            controllerRef.current.abort();
        }
        controllerRef.current = new AbortController();
        fetchTableRecords();
    }, [])

    return <TableContainer />
}
export default SNTable