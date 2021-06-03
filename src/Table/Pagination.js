import { memo, useContext, useState } from "react";
import { Button, Icon, Dropdown } from "../index";
import classNames from "classnames";
import { TableContext } from "./context/table";

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

const PaginationItem = ({ label, active, onClick }) => {
  return (
    <Button
      className="roundedButton"
      variant={active ? "primary" : "secondary"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

const More = memo(
  ({ icon, show, onClick }) => {
    if (!show) return null;
    return (
      <Button icon={icon} className="moreButton" size="sm" onClick={onClick} />
    );
  },
  (p, n) => p.show === n.show
);

export const Pagination = (props) => {
  const {
    current = 1,
    total = 1,
    maxPagination = 4,
    pageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    showQuickJumper = true,
    alignment = "end",
  } = props;
  const [peerPageOpened, setPeerPageOpened] = useState(false);
  const {
    currentPage: page,
    peerPage,
    setCurrentPage: setTab,
    setPeerPage,
  } = useContext(TableContext);
  const pages = Math.ceil(total / peerPage) || 1;

  const showAll = pages <= maxPagination + 1;
  const isFirstNElements = showAll || page < maxPagination;
  const isLastNElements =
    showAll || (!isFirstNElements && page + maxPagination > pages);

  const isFirstPage = page === 1;
  const isLastPage = page === pages;

  const showMoreIconRight = !isLastNElements;
  const showMoreIconLeft = !isFirstNElements;

  const handleNextPage = () => setTab((current) => current + 1);
  const handlePrevPage = () => setTab((current) => current - 1);

  const handleClick = (i) => () => setTab(i);

  const jumpToNext = () => {
    setTab((current) => current + 5);
  };

  const jumpToPrev = () => {
    setTab((current) => current - 5);
  };

  const generatePaginationItems = (start, end) => {
    let items = [];

    for (let i = start; i <= end; i++) {
      items.push(
        <PaginationItem
          key={`item_${i}`}
          label={i}
          active={page === i}
          onClick={handleClick(i)}
        />
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
    console.log("handleSelectedItem");

    setPeerPageOpened(() => false);
    setPeerPage(clickedItem.label);
  };

  const handleOpened = ({ opened }) => {
    console.log("handleOpened", opened);
    setPeerPageOpened((current) => {
      if (opened === undefined) return false;
      return !current;
    });
  };

  console.log({ peerPageOpened, peerPage });

  return (
    <div className={classNames("pagination-container", alignment)}>
      <div className={classNames("pagination", alignment)}>
        <Button
          icon="arrow-left-short"
          disabled={isFirstPage}
          className="roundedButton"
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
          className="roundedButton"
          onClick={handleNextPage}
        />
      </div>
      <Dropdown
        items={pageSizeOptions.map((number) => ({
          id: number,
          label: number,
        }))}
        className="pagination-dropdown"
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
