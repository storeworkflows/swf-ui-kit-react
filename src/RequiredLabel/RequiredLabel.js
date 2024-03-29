import PropTypes from 'prop-types';
import * as React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import Icon from '../Icon/Icon';

const RequiredLabel = React.forwardRef((props, ref) => {
  const {
    required, label, invalid, className, htmlFor,
  } = props;
  const labelClasses = classnames(
    className,
    'label-area',
    { '--invalid': invalid },
  );

  return (
    (required || label)
      ? (
        <div className={labelClasses} ref={ref}>
          {label && <label htmlFor={htmlFor} className="label-text">{label}</label>}
          {required && <Icon className="label-icon" icon="asterisk" customSize={7} />}
        </div>
      )
      : null
  );
});

RequiredLabel.defaultProps = {
  required: false,
  invalid: false,
  className: {},
};

RequiredLabel.propTypes = {
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  className: propTypes.oneOfType([propTypes.object, propTypes.string]),
  htmlFor: PropTypes.string,
};

export default RequiredLabel;
