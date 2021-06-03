import {Thead} from "./Thead";
import {Th} from "./Th";
import {Tr} from "./Tr";
import {Tbody} from "./Tbody";
import {Td} from "./Td";
import {Pagination} from "./Pagination";
import propTypes from "prop-types";

const tableRow = ({data: record, key, render}) => {
    if (!key) {
        return console.error("Key is empty in headers props");
    }

    const value = record[key];

    return <Td key={`${key}`}>{render ? render({record, value}) : value}</Td>
}

export const Table = ({headers = [], dataSource = [], paginationBottom, paginationTop}) => {
    const rowsCount = Array(dataSource.length).fill(null);

    return <div className="tableResponsive">
        <Pagination total={rowsCount.length} {...paginationTop}/>
        <table className="table" cellPadding={0} cellSpacing={0}>
            <Thead>
                {headers.map(({label, key}) => <Th key={`${key}:${label}`}>{label}</Th>)}
            </Thead>
            <Tbody>
                {
                    rowsCount.map((_, index) => <Tr key={`tr:${index}`}>{
                        headers.map(({key, render}) => tableRow({data: dataSource[index], key, render}))
                    }</Tr>)
                }
            </Tbody>
        </table>
        <Pagination total={rowsCount.length} {...paginationBottom}/>
    </div>
}

Table.defaultProp = {
    headers: [],
    dataSource: [],
    paginationTop: {
        alignment: "end"
    },
    paginationBottom: {
        alignment: "end"
    }
}

Table.propTypes = {
    headers: propTypes.arrayOf(propTypes.shape({
        label: propTypes.string,
        key: propTypes.string,
        render: propTypes.func
    })),
    dataSource: propTypes.arrayOf(propTypes.object),
    paginationTop: propTypes.shape({
        alignment: propTypes.oneOf(["start", "center", "end"])
    }),
    paginationBottom: propTypes.shape({
        alignment: propTypes.oneOf(["start", "center", "end"])
    })
}