import * as React from 'react';
import { useContext } from 'react';
import Popover from '../../Popover/Popover';
import { SearchContent } from './SearchContent';
import { LookUpContext } from '../context/LookUpContext';

export const SearchResult = (props) => {
  const {
    focused, searchResults, loading, subscribers,
  } = useContext(LookUpContext);
  const {
    target, noResults,
  } = props;

  const listWidth = () => target?.current?.offsetWidth - 16;

  const hasTarget = (_) => !!target?.current ?? false;

  const handleResultClick = (record) => {
    subscribers.forEach((subscriber) => subscriber(record));
  };

  return (
    <>
      {hasTarget()
    && (
    <Popover
      hideTail
      manageOpened
      opened={focused}
      positionTarget={target}
      positions={[
        { target: 'bottom-center', content: 'top-center' },
        { target: 'top-center', content: 'bottom-center' },
      ]}
    >
      <Popover.Content>
        <ul className="result" style={{ width: `${listWidth()}px` }}>
          {focused && (
          <SearchContent
            loading={loading}
            noResults={noResults}
            records={searchResults}
            onClick={handleResultClick}
          />
          )}
        </ul>
      </Popover.Content>
    </Popover>
    )}
    </>
  );
};
