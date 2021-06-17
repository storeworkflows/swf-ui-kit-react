import { SNTable, Tab } from '../index';
import React, { Fragment, useState, useEffect } from 'react';

export default function RelatedList(props) {
    const { formRecord, onRowClick } = props;
    const { sysId, baseTable, relatedLists } = formRecord;

    const [selectedItem, setSelectedItem] = useState(null);
    const [tabTableParams, setTabTableParams] = useState(relatedLists[0]);

    useEffect(() => {
        setTabTableParams(relatedLists[0]);
        setSelectedItem(tabItems.length ? tabItems[0].id : null);
    }, [relatedLists]);

    const tabItems = relatedLists.map(item => (
        {
            ...item,
            id: item.displayName,
            label: item.displayName
        }
    ));

    const query = (() => {
        switch (baseTable) {
            case 'x_aaro2_swf_store':
            case 'x_aaro2_swf_station':
            case 'x_aaro2_swf_inventory_item':
            case 'x_aaro2_swf_inventory_return':
                return `${tabTableParams.field}.sys_id=${sysId}`

            default:
                return tabTableParams.filter;
        }
    });

    return (
        <Fragment>
            {
                tabItems.length ?
                <Fragment>
                    <div className='record__tab-container'>
                        <Tab
                            items={tabItems}
                            manageSelectedItem
                            tabsAlignment='left'
                            selectedItem={selectedItem}
                            onClick={({ id, item }) => {
                                setTabTableParams(item);
                                setSelectedItem(id);
                            }}
                        />
                    </div>
                    {
                        tabTableParams &&
                        <div className="record__related-table">
                            <SNTable
                                stickyHeader
                                view='Portal'
                                headerPosition={70}
                                table={tabTableParams.table}
                                query={relatedLists.length && query()}
                                paginationBottom={{ alignment: 'none' }}
                                onClick={onRowClick}
                                paginationTop={{ alignment: 'end', sticky: true, position: 43 }}
                            />
                        </div>
                    }
                </Fragment> :
                null
            }
        </Fragment>
    )
}
