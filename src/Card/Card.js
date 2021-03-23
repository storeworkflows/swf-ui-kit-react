import classnames from "classnames";
import propTypes from "prop-types";
import {Component, Fragment, Children} from "react";
import CardPreloader from "./Preloader";


class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { vertical, loading, customStyles, size } = this.props;

		if (loading) return <CardPreloader/>

		return (
			<>
				<div
					className={
						classnames({
							"swf-card": true,
							"vertical": vertical,
							[`--${size}`]: true
						})
					}
					 style={customStyles}
				>
					<Fragment>{Children.only(this.props.children)}</Fragment>
				</div>
			</>
		)
	}
}

Card.propTypes = {
	vertical: propTypes.bool,
	loading: propTypes.bool,
	customStyles: propTypes.object,
	size: propTypes.oneOf(["s", "m", "l"]),
	dispatch: propTypes.func
}

export default Card