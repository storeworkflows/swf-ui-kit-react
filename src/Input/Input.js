import * as React from "react";
import classnames from "classnames";

import {SWF_INPUT} from "./constants";
import propTypes from "prop-types";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked
		}
	};

	render() {
		const {dispatch, properties} = this.props;

		const {
			disabled,
			label = "label",
			name= "name",
			placeholder,
			readonly,
			required,
			type,
			value,
			invalid,
			step,
			autofocus,
			max,
			min,
			maxlength,
			minlength,
			pattern,
			multiple,
			message
		} = properties;

		const _hasLabel = label !== undefined;
		const _hasMessages = message.length>0;
		console.log("has", _hasMessages);
		return (
			<div  className="input-container">
				{ _hasLabel &&
					<span>{label}</span>
				}

				<input className="input-field"
					   name={name}
					   placeholder={placeholder}
					   step={step}
					   type={type}
					   aria-required={required}
					   aria-invalid={invalid}
					   value={value}
					   readOnly={readonly}
					   required={required}
					   autoFocus ={autofocus}
					   max={max}
					   min={min}
					   maxLength={maxlength}
					   minLength={minlength}
					   pattern={pattern}
					   disabled={disabled}
					   multiple={multiple}
					   onInput={()=> dispatch(SWF_INPUT.INPUT)}
				/>
				{ _hasMessages &&
					message.map((el) => {
						const _hasIcon = el.icon !== undefined && el.icon.length>0;
						const _hasContent = el.content !==undefined && el.content.length>0;

						const _exist = _hasIcon || _hasContent;
						return(
							_exist
								?
								<div className={classnames(el.status)}>
									{_hasIcon && null
										//<x-mobi-swf-icon icon={el.icon} size="sm"/>
									}
									{_hasContent &&
										<span>{el.content}</span>
									}
								</div>
								: null
						)
					})

				}
			</div>
		)
	}
}

Input.defaultProps = {
	autofocus: false,
	disabled: false,
	invalid: false,
	manageInvalid: false,
	manageValue: false,
	message: [],
	multiple: false,
	readonly: false,
	required: false,
	step: "any",
	type: "text"
}

Input.propTypes = {
	autofocus: propTypes.bool,
	disabled: propTypes.bool,
	// helperContent: propTypes.string,
	invalid: propTypes.bool,
	label: propTypes.string,
	manageInvalid: propTypes.bool,
	manageValue: propTypes.bool,
	max: propTypes.number,
	min: propTypes.number,
	maxlength: propTypes.number,
	minlength: propTypes.number,
	message:  propTypes.arrayOf(propTypes.shape({
		status: propTypes.oneOf(["critical" , "warning" , "positive" , "info" , "suggestion"]),
		content: propTypes.string,
		icon: propTypes.string
	})),
	multiple: propTypes.bool,
	name: propTypes.string,
	pattern: propTypes.string,
	placeholder: propTypes.string,
	readonly: propTypes.bool,
	required: propTypes.bool,
	step: propTypes.oneOfType([
		propTypes.number,
		propTypes.oneOf["any"]
	]),
	type: propTypes.oneOf(["email" , "ip" , "number" , "text"]),
	value: propTypes.string
}

export default Input;