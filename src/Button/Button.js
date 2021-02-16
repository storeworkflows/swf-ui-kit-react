import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.scss";
import {SWF_BUTTON} from "./constants";
import {addStyles, getIconSize} from "./utils";

//import "../x-mobi-swf-icon"



class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconColor: SWF_BUTTON.TEXT_COLOR,
			focused: false
		}
	};

	render() {

		const {iconColor, focused} = this.state;
		const {
			disabled,
			icon,
			label,
			tooltipContent,
			size,
			variant,
			customStyle
		} = this.props;

		const additionalStyle = addStyles(customStyle);

		const _hasIcon = icon.length>0;
		const _hasLabel = label.length>0;
		const _hasOnlyIcon = _hasIcon && !_hasLabel;
		const _emptyElement = !_hasLabel && !_hasIcon;
		const _iconSize = getIconSize(customStyle, icon, size);

		const focus = () => {
			this.setState({
				focused: true,
				iconColor: SWF_BUTTON.ACTIVE_TEXT_COLOR
			})
		};

		const blur = () => {
			this.setState({
				focused: false,
				iconColor: SWF_BUTTON.TEXT_COLOR
			})
		}

		const mouseOver = () => {
			if(!focused)
				this.setState({iconColor: SWF_BUTTON.HOVER_TEXT_COLOR})
		}

		const mouseOut = () => {
			if(!focused)
				this.setState({iconColor: SWF_BUTTON.TEXT_COLOR})
		}

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
					//onClick={() => dispatch(SWF_BUTTON.CLICKED)}
					disabled = {disabled}
					title = {tooltipContent}
					style={additionalStyle}
					onFocus={() => focus()}
					onBlur={() => blur()}
					onMouseOver={() => mouseOver()}
					onMouseOut={() => mouseOut()}
				>
					<div className="content">
						{/*{_hasIcon &&*/}
						{/*	<x-mobi-swf-icon*/}
						{/*		className={classnames(*/}
						{/*			{*/}
						{/*				"button-icon": true,*/}
						{/*				"label-button-icon": !_hasOnlyIcon*/}
						{/*			}*/}
						{/*		)}*/}
						{/*		slot="defaultSlot"*/}
						{/*		icon={icon}*/}
						{/*		color={iconColor}*/}
						{/*		customSize={_iconSize}*/}
						{/*	/>*/}
						{/*}*/}

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
