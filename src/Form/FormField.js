import React from 'react';

export default function FormField({ label, value }) {
    return (
        <div className='form__item'>
            <span className='form__item-label'>{label}: </span>
            <span className='form__item-value'>{value}</span>
        </div>
    )
}
