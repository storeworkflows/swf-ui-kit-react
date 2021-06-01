import React from 'react';
import Button from '../Button/Button';
import Dropdown from "../Dropdown/Dropdown";
import { DROPDOWN_ITEMS, LEFT_PAGE, RIGHT_PAGE } from "./constants";

const PaginationView = (props) => {
	const {
		pages, totalPages, currentPage,
		onLeftClick, onRightClick, onPageClick,
		recordsPerPage, onRecordsPerPageSelect, displayPageLimitDropdown
	} = props;

	const getButtonData = (page) => {
		if (page === LEFT_PAGE) {
			return {
				onClick: onLeftClick,
				label: '«',
				className: `pagination__button pagination__button_arrow`
			};
		}

		if (page === RIGHT_PAGE) {
			return {
				onClick: onRightClick,
				label: '»',
				className: `pagination__button pagination__button_arrow`
			};
		}

		return {
			onClick: onPageClick(page),
			label: page,
			className: `pagination__button ${currentPage === page && 'pagination__button_active'}`
		}
	}

	return (
		<nav className="pagination pagination__container">
			<div className="pagination__buttons-container">
				{totalPages > 1 && pages.map((page, i) => {
					const buttonData = getButtonData(page);
					return (
						<Button
							key={i}
							className={buttonData.className}
							size="md"
							onClick={buttonData.onClick}
						>
							<span>{buttonData.label}</span>
						</Button>
					)
				})}
			</div>
			{displayPageLimitDropdown && (
				<div className="pagination__dropdown-container">
					<span>Records per page:</span>
					<Dropdown
						selectedItems={[recordsPerPage]}
						onItemSelected={onRecordsPerPageSelect}
						items={DROPDOWN_ITEMS}
						scrollToSelected={false}
					/>
				</div>
			)}
		</nav>
	);
};

export default PaginationView;
