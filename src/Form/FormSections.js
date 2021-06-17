import { Tab } from '../index';
import React, { Fragment, useState, useEffect } from 'react';

export default function FormSections({ sections }) {
    const [tabSection, setTabSection] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const isSections = sections.length;

        setSelectedItem(isSections ? sections[0].id : null);
        setTabSection(isSections ? sections[0].items : null);

        return () => {
            setTabSection(null);
            setSelectedItem(null);
        }
    }, [sections]);

    return (
        <Fragment>
            <Tab
                items={sections}
                manageSelectedItem
                tabsAlignment='left'
                selectedItem={selectedItem}
                onClick={({ id, item }) => {
                    setSelectedItem(id);
                    setTabSection(item.items);
                }}
            />
            <div className='form__fields form__sections'>
                {
                    tabSection &&
                    <Fragment>
                        {tabSection}
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}
