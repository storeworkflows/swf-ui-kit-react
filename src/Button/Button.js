import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import styles from "./styles.scss";
import {SWF_BUTTON} from "./constants";
import {addStyles, getIconSize} from "./utils";
import {dispatch} from "../utils/dispatchDecorator";


@dispatch()
class Button extends React.Component {

	render() {

		const {
			disabled,
			icon,
			label,
			tooltipContent,
			size,
			variant,
			customStyle,
			dispatch
		} = this.props;

		const additionalStyle = addStyles(customStyle);

		const _hasIcon = icon.length>0;
		const _hasLabel = label.length>0;
		const _hasOnlyIcon = _hasIcon && !_hasLabel;
		const _emptyElement = !_hasLabel && !_hasIcon;
		const _iconSize = getIconSize(customStyle, icon, size);

		return (
			<>
				<style type="text/css">{styles}</style>
				<button
					className={classnames(
						variant,
						`button-${size}`,
						{
							"swf-button": true,
							"active": !disabled,
							"has-icon": _hasIcon
						}
					)}
					onClick={() => dispatch(SWF_BUTTON.CLICKED)}
					disabled = {disabled}
					title = {tooltipContent}
					style={additionalStyle}
				>
					<div className="content">
						{_hasIcon &&
							<div className={classnames(
								{
									"button-icon": true,
									"label-button-icon": !_hasOnlyIcon
								}
							)}>
								<Icon
									icon={icon}
									customSize={_iconSize}
								/>
							</div>
						}

						{ _hasLabel && <label>{label}</label> }
						{_emptyElement && <slot/> }

					</div>
				</button>
			</>
		)
	}
}

Button.defaultProps = {
	disabled: false,
	icon: "",
	label: "",
	tooltipContent: "",
	size: 'md',
	variant:  "secondary",
	customStyle: null
}

Button.propTypes = {
	disabled: propTypes.bool,
	icon: propTypes.string,
	label: propTypes.string,
	tooltipContent: propTypes.string,
	size: propTypes.oneOf(['sm', 'md', 'lg']),
	variant:  propTypes.oneOf(["primary" , "primary-positive" , "primary-negative" , "secondary" ,
				"secondary-positive" , "secondary-negative" , "tertiary" , "inherit", ""]),
	customStyle: propTypes.object
}

export default Button