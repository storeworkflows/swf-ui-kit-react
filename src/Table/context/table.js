import {createContext, useState} from "react";

export const TableContext = createContext({
    currentPage: 1,
    peerPage: 10
});

export const TableProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [peerPage, setPeerPage] = useState(10);

    return <TableContext.Provider value={{currentPage, peerPage, setCurrentPage, setPeerPage}}>
        {children}
    </TableContext.Provider>
}
