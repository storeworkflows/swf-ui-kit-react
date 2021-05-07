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
		this.onClick = this.onClick.bind(this);
		this.state = {
			checked: this.props.checked
		}
	};

	onClick(){
		const {manageChecked, onClick, checked} = this.props;

		if(!manageChecked) {
			let newChecked = !this.state.checked
			this.setState({checked: newChecked})
			onClick({value: newChecked});
		} else
			onClick({value: checked});
	}

	render() {
		const { disabled, size, customStyle, className, manageChecked, checked, visible } = this.props;

		const additionalStyle = _addStyles(customStyle);
		let toggleClasses = classnames(
			className,
			`toggle-${size}`,
			{
				"switch": true,
				"disabled": disabled
			})

		return (
			!visible ?
				<>
					<label className={toggleClasses}
						   style={additionalStyle}
					>
						<input type="checkbox"
							   checked  = {manageChecked ? checked : this.state.checked}
							   disabled = {disabled}
							   onChange = {this.onClick}
						/>
							<span className="slider"/>
					</label>
				</>
			: null
		)
	}
}

Toggle.defaultProps = {
	checked: false,
	disabled: false,
	manageChecked: false,
	size: "md",
	customStyle: null,
	onClick: () => void 0,
	className: "",
	visible: false
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
	onClick: propTypes.func,
	className: propTypes.oneOfType([propTypes.string, propTypes.object]),
	visible: propTypes.bool
}

export default Toggle;
