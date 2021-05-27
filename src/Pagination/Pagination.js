import * as React from "react";
import { useEffect, useState } from 'react';
import propTypes from "prop-types";
import PaginationView from "./PaginationView";
import { LEFT_PAGE, RIGHT_PAGE } from "./constants";
import { range } from "./utils";

const Pagination = (props) => {
	const { totalRecords, pageLimit, currentPageSiblingsAmount, onPageChange } = props;

	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [pagesArray, setPagesArray] = useState([]);

	useEffect(() => {
		setTotalPages(Math.ceil(totalRecords / pageLimit));
	}, [totalRecords, pageLimit]);

	useEffect(() => {
		setPagesArray(getPagesArray());
	}, [currentPage, totalPages]);


	const gotoPage = page => {
		const currentPage = Math.max(0, Math.min(page, totalPages));

		const paginationData = {
			currentPage,
			totalPages: totalPages,
			pageLimit: pageLimit,
			totalRecords: totalRecords
		};

		setCurrentPage(currentPage);
		onPageChange(paginationData);
	};

	const getPagesArray = () => {
		const totalShownNumbers = (currentPageSiblingsAmount * 2) + 3;
		const totalShownButtons = totalShownNumbers + 2;

		if (totalPages > totalShownButtons) {
			const startPage = Math.max(2, currentPage - currentPageSiblingsAmount);
			const endPage = Math.min(totalPages - 1, currentPage + currentPageSiblingsAmount);
			let pages = range(startPage, endPage);

			const hasLeftExtraPages = startPage > 2;
			const hasRightExtraPages = (totalPages - endPage) > 1;
			const extraPagesOffset = totalShownNumbers - (pages.length + 1);

			switch (true) {
				// handle: (1) < {5 6} [7] {8 9} (10)
				case (hasLeftExtraPages && !hasRightExtraPages): {
					const extraPages = range(startPage - extraPagesOffset, startPage - 1);
					pages = [LEFT_PAGE, ...extraPages, ...pages];
					break;
				}

				// handle: (1) {2 3} [4] {5 6} > (10)
				case (!hasLeftExtraPages && hasRightExtraPages): {
					const extraPages = range(endPage + 1, endPage + extraPagesOffset);
					pages = [...pages, ...extraPages, RIGHT_PAGE];
					break;
				}

				// handle: (1) < {4 5} [6] {7 8} > (10)
				case (hasLeftExtraPages && hasRightExtraPages):
				default: {
					pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
					break;
				}
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	}

	const onPageClick = page => e => {
		e.preventDefault();
		gotoPage(page);
	}

	const onLeftClick = e => {
		e.preventDefault();
		gotoPage(currentPage - (currentPageSiblingsAmount * 2) - 1);
	}

	const onRightClick = e => {
		e.preventDefault();
		gotoPage(currentPage + (currentPageSiblingsAmount * 2) + 1);
	}

	if (totalPages < 2) {
		return null;
	}

	return (
		<PaginationView
			pages={pagesArray}
			currentPage={currentPage}
			onLeftClick={onLeftClick}
			onRightClick={onRightClick}
			onPageClick={onPageClick}
		/>
	);
};

Pagination.propTypes = {
	totalRecords: propTypes.number,
	pageLimit: propTypes.number,
	currentPageSiblingsAmount: propTypes.oneOf([0, 1, 2]),
	onPageChange: propTypes.func
}

Pagination.defaultProps = {
	totalRecords: 1,
	pageLimit: 1,
	currentPageSiblingsAmount: 1,
	onPageChange: () => {}
}

export default Pagination;
