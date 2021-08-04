import * as React from 'react';
import Result from './Result';

export const SearchContent = (props) => {
  const {
    loading, noResults, records, onClick,
  } = props;

  if (loading) return <span className="message">Loading...</span>;

  if (noResults) return <span className="message">No Results Found</span>;

  return <Result records={records} onClick={onClick} />;
};
