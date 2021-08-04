import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';

import FilterBreadcrumbItem from './FilterBreadCrumbItem/FilterBreadcrumbItem';

export default class FilterBreadcrumbs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, clickBtn } = this.props;
    return (
      <div className="breadcrumbs-container">
        {
                    items.map((el, index) => (
                      <div className="item-container" key={el.id}>
                        <FilterBreadcrumbItem itemData={el} key={uuidv4()} itemIndex={index} clickBtn={clickBtn} />
                      </div>
                    ))
                }
      </div>
    );
  }
}
