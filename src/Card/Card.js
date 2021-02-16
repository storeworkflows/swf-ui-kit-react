import classnames from "classnames";
import propTypes from "prop-types";
import styles from "./styles.scss";

function Card (props) {
	const { vertical, loading, customStyles, size } = props;

	return (
		<>
			<style type="text/css">{styles}</style>
			<div className={
				classnames({
					"swf-card": true,
					"vertical": vertical,
					[`--${size}`]: true
				})
			} style={customStyles}>
				{props.children}
			</div>
		</>
	)
}

Card.propTypes = {
	vertical: propTypes.bool,
	loading: propTypes.bool,
	customStyles: propTypes.object,
	size: propTypes.oneOf(["s", "m", "l"])
}

export default Card
