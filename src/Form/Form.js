import React, { Fragment, useState, useEffect } from 'react';
import RelatedList from "./RelatedList";
import FormSections from './FormSections';
import { formColumnRender } from './formColumnRender';
import { getRecordData } from "./requests/get";
import { Loader } from "../index";

export default function Form(props) {
    const { table, sysId, isFullScreen, onRelatedListRowClick, onReferenceFieldClick } = props;

    const [sections, setSections] = useState(null);
    const [formRecord, setFormRecord] = useState(null);
    const [defaultSection, setDefaultSection] = useState(null);

    useEffect(() => {
        getRecordData(table, sysId)
            .then(setFormRecord);

        return () => {
            setFormRecord(null);
        }
    }, [table, sysId])

    useEffect(() => {
        if (!formRecord) return;

        const [defaultSection, sections] = formColumnRender({ formRecord, onReferenceFieldClick });

        setDefaultSection(defaultSection);
        setSections(sections.length ? sections : null);

        return () => {
            setSections(null);
            setDefaultSection(null);
        }
    }, [formRecord]);

    return formRecord ? (
            <div className='form'>
                <div className='form__title'>
                    <span className='form__title-header'>{formRecord.sections[0].captionDisplay}</span>
                    <span className='form__title-value'>{formRecord.formFields[0].displayValue}</span>
                </div>
                <div className='form__fields'>
                    {
                        defaultSection &&
                        <Fragment>
                            {defaultSection.items}
                        </Fragment>
                    }

                </div>
                {
                    sections && <FormSections sections={sections}/>
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
        :
        <Loader/>
}
