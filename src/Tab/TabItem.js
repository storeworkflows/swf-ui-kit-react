import * as React from 'react';
import classNames from 'classnames';

import { useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import Popover from '../Popover/Popover';

const TabItem = React.forwardRef((props, ref) => {
  const infoRef = useRef(null);
  const [infoOpened, setInfoOpened] = useState(false);

  const {
    item, isSelected, hideLabel, tabSelected, disabled,
  } = props;
  const {
    label, icon, id, style,
    required = false, invalid = false, infoMessage,
  } = item;

  const hasIcon = !!icon;
  const hasRef = infoRef && infoRef.current;

  const tabClasses = classNames({
    'swf-tab': true,
    active: isSelected && (!disabled && !item.disabled),
    disabled: disabled || item.disabled,
    invalid,
  });

  const popoverPositions = [
    { target: 'top-center', content: 'bottom-center' },
    { target: 'top-start', content: 'bottom-start' },
    { target: 'top-end', content: 'bottom-end' },
    { target: 'bottom-center', content: 'top-center' },
    { target: 'bottom-start', content: 'top-start' },
    { target: 'bottom-end', content: 'top-end' },
  ];

  return (
    <div
      key={id}
      className={tabClasses}
      onClick={() => tabSelected(item, item.id, (disabled || item.disabled))}
      style={style || {}}
      ref={ref}
    >
      {hasIcon && <Icon icon={icon} size="sm" />}
      {!hideLabel && <div className="label">{label}</div>}
      {required && <Icon icon="asterisk" customSize={8} />}
      {infoMessage && (
      <div
        className="info-icon-container"
        ref={(el) => infoRef.current = el}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setInfoOpened(!infoOpened);
        }}
      >
        <Icon
          className="info-icon"
          icon={infoOpened ? 'info-circle-fill' : 'info-circle'}
          size="sm"
        />
      </div>
      )}
      {hasRef && (
      <Popover
        hideTail
        manageOpened
        opened={infoOpened}
        onOuterPopoverClicked={() => setInfoOpened(false)}
        positionTarget={infoRef}
        positions={popoverPositions}
      >
        <Popover.Content>
          <span className="info-content">{infoMessage}</span>
        </Popover.Content>
      </Popover>
      )}
    </div>
  );
});

export default React.memo(TabItem);
