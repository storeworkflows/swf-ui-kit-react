import {
  memo, useContext, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { Button, Icon, Dropdown } from '../index';
import { TableContext } from './context/table';

/*
interface IPagination {
    current?: number,
    total?: number,
    pageSize?: number,
    alignment?: "start" | "center" | "end",
    pageSizeOptions?: number[],
    showQuickJumper?: boolean,
    maxPagination?: number,
    onChange?: (page: number) => void
} */

const PaginationItem = ({ label, active, onClick }) => (
  <Button
    className="swfRoundedButton"
    variant={active ? 'primary' : 'secondary'}
    onClick={onClick}
  >
    {label}
  </Button>
);

const More = memo(
  ({ icon, show, onClick }) => {
    if (!show) return null;
    return (
      <Button icon={icon} className="swfMoreButton" size="sm" onClick={onClick} />
    );
  },
  (p, n) => p.show === n.show,
);

export const Pagination = (props) => {
  const {
    current = 1,
    total = 1,
    maxPagination = 4,
    pageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    showQuickJumper = true,
    alignment = 'end',
    sticky,
    position,
    property = '--positionTop',
  } = props;

  const paginationRef = useRef(null);

  useEffect(() => {
    paginationRef.current.style.setProperty(property, `${position}px`);
  }, [position]);

  const [peerPageOpened, setPeerPageOpened] = useState(false);
  const {
    currentPage: page,
    peerPage,
    setCurrentPage: setTab,
    setPeerPage,
    setOffset,
  } = useContext(TableContext);
  const pages = Math.ceil(total / peerPage) || 1;

  const showAll = pages <= maxPagination + 1;
  const isFirstNElements = showAll || page < maxPagination;
  const isLastNElements = showAll || (!isFirstNElements && page + maxPagination > pages);

  const isFirstPage = page === 1;
  const isLastPage = page === pages;

  const showMoreIconRight = !isLastNElements;
  const showMoreIconLeft = !isFirstNElements;

  const setCurrentPageGap = (gap) => {
    setTab((current) => {
      const newPage = current + gap;
      setOffset(peerPage * (newPage - 1));
      return newPage;
    });
  };

  const handleNextPage = () => {
    setCurrentPageGap(1);
  };
  const handlePrevPage = () => {
    setCurrentPageGap(-1);
  };

  const handleClick = (i) => () => {
    setCurrentPageGap(i - page);
  };

  const jumpToNext = () => {
    setCurrentPageGap(5);
  };

  const jumpToPrev = () => {
    setCurrentPageGap(-5);
  };

  const generatePaginationItems = (start, end) => {
    const items = [];

    for (let i = start; i <= end; i++) {
      items.push(
        <PaginationItem
          key={`item_${i}`}
          label={i}
          active={page === i}
          onClick={handleClick(i)}
        />,
      );
    }

    return items;
  };

  const firstItem = () => {
    if (isFirstNElements) return null;
    return (
      <PaginationItem
        key="first"
        label={1}
        active={page === 1}
        onClick={handleClick(1)}
      />
    );
  };

  const lastItem = () => {
    if (isLastNElements) return null;
    return (
      <PaginationItem
        key="last"
        label={pages}
        active={page === pages}
        onClick={handleClick(pages)}
      />
    );
  };

  const mainItems = () => {
    let start = 1;
    let end = pages;

    if (isFirstNElements) {
      end = showAll ? pages : maxPagination;
    } else if (isLastNElements) {
      start = showAll ? 1 : pages - maxPagination;
    } else {
      start = page - 2;
      end = page + 2;
    }

    return generatePaginationItems(start, end);
  };

  const handleSelectedItem = ({ clickedItem }) => {
    setPeerPageOpened(() => false);
    setPeerPage(clickedItem.label);
    const pages = Math.ceil(total / clickedItem.label) || 1;
    if (pages > page) return setCurrentPageGap(0);
    return setCurrentPageGap(pages - page);
  };

  const handleOpened = ({ opened }) => {
    setPeerPageOpened((current) => {
      if (opened === undefined) return false;
      return !current;
    });
  };

  return (
    <div ref={paginationRef} className={classNames('swfPaginationContainer', alignment, sticky && '--sticky')}>
      <div className={classNames('swfPagination', alignment)}>
        <Button
          icon="arrow-left-short"
          disabled={isFirstPage}
          className="swfRoundedButton"
          onClick={handlePrevPage}
        />
        {firstItem()}
        <More
          show={showMoreIconLeft}
          icon="chevron-double-left"
          onClick={jumpToPrev}
        />
        {mainItems()}
        <More
          show={showMoreIconRight}
          icon="chevron-double-right"
          onClick={jumpToNext}
        />
        {lastItem()}
        <Button
          icon="arrow-right-short"
          disabled={isLastPage}
          className="swfRoundedButton"
          onClick={handleNextPage}
        />
      </div>
      <Dropdown
        items={pageSizeOptions.map((number) => ({
          id: number,
          label: number,
        }))}
        className="swfPaginationDropdown"
        selectedItems={[peerPage]}
        scrollToSelected={false}
        opened={peerPageOpened}
        onItemSelected={handleSelectedItem}
        manageSelectedItems
        manageOpened
        onOpened={handleOpened}
      />
    </div>
  );
};
