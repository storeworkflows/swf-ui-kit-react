import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import styles from "./style.scss";
import {SWF_TOGGLE} from "./constants";
import {dispatch} from "../utils/dispatchDecorator";

const _addStyles = (customStyle) => {
	let styles = {};
	const hasStyles = customStyle !== null;
	if(hasStyles)
		SWF_TOGGLE.AVAILABLE_CUSTOM_STYLES.forEach((styleName)=>{
			if(customStyle[styleName]!==undefined)
				styles[styleName] = customStyle[styleName];
		})

	return styles;
}

//@dispatch()
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
			dispatch,
			onClick
		} = this.props;

		const additionalStyle = _addStyles(customStyle);

		const toggleClick = () => {
			let checked = this.state.checked
			if(!manageChecked) {
				checked = !this.state.checked
				this.setState({checked: checked})
			}
			onClick(checked);
			//dispatch(SWF_TOGGLE.CLICKED, {value: checked});
		};

		return (
			<>
				<style type="text/css">{styles}</style>
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
	checked: propTypes.bool,
	disabled: propTypes.bool,
	manageChecked: propTypes.bool,
	size: propTypes.oneOf(["sm", "md"]),
	customStyle: propTypes.object,
	onClick: propTypes.func
}

export default Toggle;
