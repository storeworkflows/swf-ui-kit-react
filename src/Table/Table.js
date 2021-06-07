import { useEffect, useContext } from "react";
import { noop } from "../utils";
import {TableContext} from "./context/table";
import { TableDefaultProps, TablePropTypes } from "./table.shema";

import {Th} from "./Th";
import {Tr} from "./Tr";
import {Td} from "./Td";
import {Tbody} from "./Tbody";
import {Thead} from "./Thead";
import Loader from "../Loader/Loader";
import {Pagination} from "./Pagination";

const tableRow = ({data: record, key, render}) => {
    if (!key) {
        return console.error("Key is empty in headers props");
    }

    const value = record[key];

    return <Td key={`${key}`}>{render ? render({record, value}) : <span title={value}>{value}</span>}</Td>
}

export const Table = ({name = "", headers = [], dataSource = [], paginationBottom, paginationTop, total, loading}) => {
    const {
        setCurrentPage,
        setOffset,
      } = useContext(TableContext);

    const rowsCount = Array(dataSource.length).fill(null);
    
    useEffect(() => {
        setCurrentPage(1);
        setOffset(0);
    }, [name])

    return <div className="tableResponsive">
        {loading && <div className="table-loader"><Loader/></div>}
        <Pagination total={total || rowsCount.length} {...paginationTop}/>
        <table className="table" cellPadding={0} cellSpacing={0}>
            <Thead>
                {headers.map(({label, key}) => <Th key={`${key}:${label}`}>{label}</Th>)}
            </Thead>
            <Tbody>
                {
                    rowsCount.map((_, index) => <Tr key={`tr:${index}`} onClick={dataSource[index]["onClick"] ?? noop}>{
                        headers.map(({key, render}) => tableRow({data: dataSource[index], key, render}))
                    }</Tr>)
                }
            </Tbody>
        </table>
        <Pagination total={total || rowsCount.length} {...paginationBottom}/>
    </div>
}

Table.defaultProp = TableDefaultProps;

Table.propTypes = TablePropTypes;