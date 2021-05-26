/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
export const range = (from, to) => {
	return new Array((to + 1) - from).fill().map((_, i) => i + from);
};
