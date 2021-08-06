import classnames from 'classnames';
import propTypes from 'prop-types';
import React, { Component, Fragment, Children } from 'react';

import CardPreloader from './Preloader';

const Card = React.forwardRef((props, ref) => {
  const {
    vertical, loading, customStyles, size, children, className,
  } = props;

  if (loading) return <CardPreloader />;

  return (
    <>
      <div
        className={
                    classnames({
                      'swf-card': true,
                      vertical,
                      [`--${size}`]: true,
                    }, className)
                }
        style={customStyles}
        ref={ref}
      >
        <>{Children.only(children)}</>
      </div>
    </>
  );
});

Card.propTypes = {
  vertical: propTypes.bool,
  loading: propTypes.bool,
  customStyles: propTypes.object,
  size: propTypes.oneOf(['s', 'm', 'l']),
  dispatch: propTypes.func,
  className: propTypes.string,
};

Card.defaultProps = {
  vertical: false,
  loading: false,
  customStyles: {},
  size: 'm',
  dispatch: () => void 0,
  className: '',
};

export default Card;
