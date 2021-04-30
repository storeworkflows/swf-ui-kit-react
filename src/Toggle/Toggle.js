import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import {SWF_TOGGLE} from "./constants";

const _addStyles = (customStyle) => {
	let styles = {};
	const hasStyles = customStyle !== null;
	if(hasStyles)
		SWF_TOGGLE.AVAILABLE_CUSTOM_STYLES.forEach((styleName)=>{
			if(customStyle[styleName]!==undefined)
				styles[`--${styleName}`]  = customStyle[styleName];
		})

	return styles;
}

class Toggle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked
		}
	};

	render() {
		const {
			disabled,
			manageChecked,
			size,
			customStyle,
			onClick
		} = this.props;

		const additionalStyle = _addStyles(customStyle);

		const toggleClick = () => {
			let checked = this.state.checked
			if(!manageChecked) {
				checked = !this.state.checked
				this.setState({checked: checked})
			}
			onClick({value: checked});
		};

		return (
			<>
				<label className={ classnames(
					`toggle-${size}`,
					{
						"switch": true,
						"disabled": disabled
					})}
					   style={additionalStyle}
				>
					<input type="checkbox"
						   checked  = {this.state.checked}
						   disabled = {disabled}
						   onChange = {toggleClick}
					/>
						<span className="slider"/>
				</label>
			</>
		)
	}
}

Toggle.defaultProps = {
	checked: false,
	disabled: false,
	manageChecked: false,
	size: "md",
	customStyle: null
}

Toggle.propTypes = {
	/**
	 * Available to change only when manageChecked=true
	 */
	checked: propTypes.bool,
	disabled: propTypes.bool,
	manageChecked: propTypes.bool,
	size: propTypes.oneOf(["sm", "md"]),
	/**
	 * Available custom styles: "width",   "height",   "circle-border-size", "border-size", "circle-gap",
	 "active-border-color", "active-background-color",
	 "border-color", "background-color",
	 "circle-border-color", "circle-background", "hover-circle-background"
	 */
	customStyle: propTypes.object,
	onClick: propTypes.func
}

export default Toggle;
