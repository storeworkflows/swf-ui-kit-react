import FormFieldType from './FormFieldType';
import React, { Fragment } from "react";

export const renderFormSection = ({ rows, formFieldValues, onReferenceFieldClick }) => {
	const columnRenderHelper = fields => {
		return fields.map((item, index) =>
			formFieldValues[item] &&
			formFieldValues[item].visible &&
			<FormFieldType
				key={`item-${index}`}
				field={formFieldValues[item]}
				onReferenceFieldClick={onReferenceFieldClick}
			/>
		)
	}

	return rows.map((field, index) => {
		if (field.length > 1) {
			const [leftColumn, rightColumn] = field.map((field) => field.fields);

			return (
				<div key={index} className='form__columns'>
					{
						<Fragment>
							<div className='form__left-column'>
								{
									columnRenderHelper(leftColumn)
								}
							</div>
							<div className='form__right-column'>
								{
									columnRenderHelper(rightColumn)
								}
							</div>
						</Fragment>
					}

				</div>
			)
		} else {
			return (
				<div key={index} className='form__item-row'>
					{
						columnRenderHelper(field[0].fields)
					}
				</div>
			)
		}

	});
}
