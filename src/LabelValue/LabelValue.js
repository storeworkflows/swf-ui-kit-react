import * as React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import findByType, { createSubComponent } from '../utils/findByType';

const LabelValue = React.forwardRef((props, ref) => {
  const {
    labelClassName, valueClassName, className,
    label, value, children, importantLabel,
    onClick, inline, size,
  } = props;

  const renderValue = () => {
    const slotValue = findByType(children, 'Value');
    const noSlot = !slotValue || slotValue.length < 1;
    if (noSlot && !value) return null;

    const renderValue = value || slotValue;
    const valueClasses = classnames(
      'value-content',
      valueClassName, {
        '--text-value': value,
        '--inline': inline,
      },
    );

    return <div className={valueClasses}>{renderValue}</div>;
  };

  const classes = classnames(
    'label-value-container',
    `--${size}`,
    className, {
      '--display-flex': inline,
      '--unimportant': !importantLabel,
    },
  );

  const labelClasses = classnames(
    'label-content',
    labelClassName, {
      '--unimportant': !importantLabel,
    },
  );

  return (
    <div
      className={classes}
      onClick={onClick}
      ref={ref}
    >
      {label && <label className={labelClasses}>{label}</label>}
      {renderValue()}
    </div>
  );
});

LabelValue.Value = createSubComponent('Value');

LabelValue.defaultProps = {
  className: {},
  labelClassName: {},
  valueClassName: {},
  inline: false,
  onClick: () => void 0,
  importantLabel: true,
  size: 'md',
};

LabelValue.propTypes = {
  label: propTypes.string,
  className: propTypes.oneOfType([propTypes.string, propTypes.object]),
  labelClassName: propTypes.oneOfType([propTypes.string, propTypes.object]),
  valueClassName: propTypes.oneOfType([propTypes.string, propTypes.object]),
  onClick: propTypes.func,
  inline: propTypes.bool,
  value: propTypes.string,
  importantLabel: propTypes.bool,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
};

export default LabelValue;
