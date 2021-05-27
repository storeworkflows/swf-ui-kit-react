import React from 'react';
import Button from '../Button/Button';
import { LEFT_PAGE, RIGHT_PAGE } from "./constants";

const PaginationView = ({ pages = [], currentPage = 1, onLeftClick = () => {}, onRightClick = () => {}, onPageClick = () => {} }) => {
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
			{pages.map((page, i) => {
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
		</nav>
	);
};

export default PaginationView;
