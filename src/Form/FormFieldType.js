import React from 'react';
import { TextLink } from '../index';
import FormField from './FormField';

export default function FormFieldType({ field, onReferenceFieldClick }) {
    const { type, label, displayValue, value, reference, referenceKey } = field;

    const handleTextLinkClick = async () => {
        onReferenceFieldClick({ value, reference, referenceKey });
    }

    // const handleTextLinkClick = async ({ value, reference, referenceKey }) => {
    // 	const layout = await getRecordData(reference, value, referenceKey);
    //
    // 	history.push({ search: `table=${layout.table}&sys_id=${layout.sysId}` });
    // }

    switch (type) {
        case 'reference':
            return (
                <div className='form__item'>
                    <span className='form__item-label'>{label}:</span>
                    {
                        displayValue &&
                        <span className='form__item-reference'>
                            <TextLink
                                onClick={handleTextLinkClick}
                                label={displayValue}
                                className='form__item-link'
                            />
                        </span>
                    }
                </div>
            )
        case 'user_image':
            return (
                <div className='form__item'>
                    <span className='form__item-label'>{label}:</span>
                    <div className='form__item-image__wrapper'>
                        {
                            displayValue &&
                            <img
                                alt='Guide image'
                                className='form__item-image'
                                src={`https://aaronsdev.service-now.com/${displayValue}`}
                            />
                        }
                    </div>
                </div>
            )
        case 'html':
            return (
                <div className='form__item form__item-article'>
                    <span className='form__item-label'>{label}:</span>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: displayValue.replaceAll('src="/', 'src="https://aaronsdev.service-now.com/')
                        }}
                    >
                    </div>
                </div>
            )
        default:
            return <FormField label={label} value={displayValue} />
    }

}
