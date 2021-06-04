import {Thead} from "./Thead";
import {Th} from "./Th";
import {Tr} from "./Tr";
import {Tbody} from "./Tbody";
import {Td} from "./Td";
import {Pagination} from "./Pagination";
import propTypes from "prop-types";
import Loader from "../Loader/Loader";
import { TableDefaultProps, TablePropTypes } from "./table.shema";
import { noop } from "../utils";

const tableRow = ({data: record, key, render}) => {
    if (!key) {
        return console.error("Key is empty in headers props");
    }

    const value = record[key];

    return <Td key={`${key}`}>{render ? render({record, value}) : value}</Td>
}

export const Table = ({headers = [], dataSource = [], paginationBottom, paginationTop, total, loading}) => {
    const rowsCount = Array(dataSource.length).fill(null);

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