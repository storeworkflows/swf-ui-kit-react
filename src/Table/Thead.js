import classNames from 'classnames';
import { useEffect, useRef } from 'react';

export const Thead = ({ sticky, position, children }) => {
  const theadRef = useRef(null);

  useEffect(() => {
    theadRef.current.style.setProperty('--position', `${position}px`);
  }, [position]);

  return (
    <thead ref={theadRef} className={classNames('swfThead', sticky && '--sticky')}>
      <tr>
        {children}
      </tr>
    </thead>
  );
};
