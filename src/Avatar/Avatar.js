import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { noop, normalizeURL } from '../utils';
import { Icon } from '../index';

console.shallowCloneLog = function () {
  const typeString = Function.prototype.call.bind(Object.prototype.toString);
  console.log.apply(console, Array.prototype.map.call(arguments, (x) => {
    switch (typeString(x).slice(8, -1)) {
      case 'Number':
      case 'String':
      case 'Undefined':
      case 'Null':
      case 'Boolean':
        return x;
      case 'Array': s;
        return x.slice();
      default:
        var out = Object.create(Object.getPrototypeOf(x));
        out.constructor = x.constructor;
        for (const key in x) {
          out[key] = x[key];
        }
        Object.defineProperty(out, 'constructor', { value: x.constructor });
        return out;
    }
  }));
};

const Avatar = (props) => {
  const {
    id,
    avatarVisible,
    open,
    color,
    manageOpened,
    member: {
      avatar,
      name,
      title,
    },
    size,
    canRemove,
    clickable,
    className,
    onClick, onRemove,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onAvatarClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (clickable) {
      setIsOpen(!isOpen);
      onClick();
    }
  };

  const getInitials = (name) => name
    .split(' ')
    .map((letter, index) => (index < 2 ? letter[0] : ''))
    .join('')
    .toUpperCase();

  const fixPhotoSize = (event) => {
    const { nativeEvent } = event;
    const { path = nativeEvent.composedPath() } = nativeEvent;

    const image = path[0];
    const { naturalWidth, naturalHeight } = image;

    const sizes = {
      xs: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
    };

    const parameters = sizes[size];

    image.style.width = naturalWidth < naturalHeight ? parameters : 'auto';
    image.style.height = naturalWidth < naturalHeight ? 'auto' : parameters;
  };

  const hasAvatar = Boolean(avatar);
  const avatarIsVisible = !hasAvatar && avatarVisible;

  const openState = manageOpened ? open : isOpen;

  return (
    <>
      <div
        ref={(elm) => props.innerRef.current = elm}
        className={classnames({
          'swf-avatar': true,
          [`--${size}`]: true,
          [`--${color}`]: true,
          '--clickable': clickable,
          '--selected': openState,
          [className]: true,
        })}
        onClick={onAvatarClick}
      >
        {hasAvatar && (
          <div className="photo-container">
            <img
              title={name}
              onLoad={fixPhotoSize}
              className="member-photo"
              src={avatar}
            />
          </div>
        )}
        {avatarIsVisible && (
          <div className={classnames({
            'member-container': true,
            '--selected': isOpen,
          })}
          >
            <p className="initials" title={name}>{getInitials(name)}</p>
          </div>
        )}

        <div className={classnames({
          'member-info': true,
          visible: openState,
        })}
        >
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
        {canRemove && openState && (
          <Icon
            className="remove"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();

              onRemove({ id });
            }}
            icon="x"
            size="md"
          />
        )}
      </div>
    </>
  );
};

Avatar.defaultProps = {
  id: 0,
  clickable: true,
  open: false,
  manageOpened: false,
  size: 'xs',
  canRemove: false,
  avatarVisible: true,
  color: 'default',
  onRemove: noop,
  onClick: noop,
  innerRef: React.createRef(),
  className: '',
};

export const AvatarMember = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  avatar: PropTypes.string,
};

Avatar.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  avatarVisible: PropTypes.bool,
  canRemove: PropTypes.bool,
  clickable: PropTypes.bool,
  manageOpened: PropTypes.bool,
  open: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'md', 'lg']),
  member: PropTypes.shape(AvatarMember),
  onRemove: PropTypes.func,
  color: PropTypes.oneOf(['default', 'primary', 'negative']),
  onClick: PropTypes.func,
  innerRef: PropTypes.object,
  className: PropTypes.string,
};

export default React.memo(Avatar);
