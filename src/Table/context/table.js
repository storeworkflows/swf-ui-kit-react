import { createContext, useState } from 'react';
import propTypes from 'prop-types';
import { noop } from '../../utils';

export const TableContext = createContext({
  currentPage: 1,
  peerPage: 10,
  offset: 0,
});

const TableProvider = ({
  offsetChanged = noop,
  currentPageChanged = noop,
  peerPageChanged = noop,
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [peerPage, setPeerPage] = useState(50);
  const [offset, setOffset] = useState(0);

  const handleCurrentPage = (value) => {
    setCurrentPage(value);
    currentPageChanged(value);
  };

  const handleOffsetChanged = (value) => {
    setOffset(value);
    offsetChanged(value);
  };

  const handlePeerPageChanged = (value) => {
    setPeerPage(value);
    peerPageChanged(value);
  };

  return (
    <TableContext.Provider
      value={{
        currentPage,
        peerPage,
        offset,
        setCurrentPage: handleCurrentPage,
        setPeerPage: handlePeerPageChanged,
        setOffset: handleOffsetChanged,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

TableProvider.defaulProps = {
  offsetChanged: noop,
  currentPageChanged: noop,
  peerPageChanged: noop,
};

TableProvider.propTypes = {
  offsetChanged: propTypes.func,
  currentPageChanged: propTypes.func,
  peerPageChanged: propTypes.func,
};

export { TableProvider };
