import React, { Fragment, useState, useEffect } from 'react';
import RelatedList from "./RelatedList";
import FormSections from './FormSections';
import { formColumnRender } from './formColumnRender';

export default function Form(props) {
    const { formRecord, isFullScreen, onRelatedListRowClick, onReferenceFieldClick } = props;

    const [sections, setSections] = useState(null);
    const [defaultSection, setDefaultSection] = useState(null);

    useEffect(() => {
        const [defaultSection, sections] = formColumnRender({ formRecord, onReferenceFieldClick });

        const isLength = sections.length;

        setDefaultSection(defaultSection);
        setSections(isLength ? sections : null);

        return () => {
            setSections(null);
            setDefaultSection(null);
        }
    }, [formRecord.sections]);

    return (
        <div className='form'>
            <div className='form__fields'>
                {
                    defaultSection &&
                    <Fragment>
                        {defaultSection.items}
                    </Fragment>
                }

            </div>
            {
                sections && <FormSections sections={sections} />
            }
            {
                isFullScreen &&
                <RelatedList
                    formRecord={formRecord}
                    onRowClick={onRelatedListRowClick}
                />
            }
        </div>
    )
}
