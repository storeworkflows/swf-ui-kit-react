import propTypes from "prop-types";
import {Table} from "./Table";
import {TableProvider} from "./context/table";
import { noop } from "../utils";

const TableContainer = (props) => {
    return <TableProvider {...props}>
        <Table {...props}/>
    </TableProvider>
}

TableContainer.defaultProp = {
    name: "",
    headers: [],
    dataSource: [],
    paginationTop: {
        alignment: "end"
    },
    paginationBottom: {
        alignment: "end"
    },
    total: undefined,
    currentPageChanged: noop,
    peerPageChanged: noop,
    offsetChanged: noop
}

TableContainer.propTypes = {
    name: propTypes.string,
    headers: propTypes.arrayOf(propTypes.shape({
        label: propTypes.string,
        key: propTypes.string,
        render: propTypes.func
    })),
    dataSource: propTypes.arrayOf(propTypes.object),
    paginationTop: propTypes.shape({
        alignment: propTypes.oneOf(["start", "center", "end", "none"])
    }),
    paginationBottom: propTypes.shape({
        alignment: propTypes.oneOf(["start", "center", "end", "none"])
    }),
    total: propTypes.number,
    loading: propTypes.bool,
    offsetChanged: propTypes.func,
    currentPageChanged: propTypes.func,
    peerPageChanged: propTypes.func,
}

export default TableContainer