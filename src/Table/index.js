import propTypes from "prop-types";
import {Table} from "./Table";
import {TableProvider} from "./context/table";

const TableContainer = (props) => {
    return <TableProvider {...props}>
        <Table {...props}/>
    </TableProvider>
}

TableContainer.defaultProp = {
    headers: [],
    dataSource: [],
    paginationTop: {
        alignment: "end"
    },
    paginationBottom: {
        alignment: "end"
    }
}

TableContainer.propTypes = {
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
    }),
    offsetChanged: propTypes.func,
    currentPageChanged: propTypes.func,
    peerPageChanged: propTypes.func
}

export default TableContainer