import classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';
import Icon from '../Icon/Icon';
import findByType, { createSubComponent } from '../utils/findByType';

const ç = React.memo(React.forwardRef((props, ref) => {
  const {
    children, open, title, showWrapper, showButton,
    manageOpened, onOpen, className, iconSize,
  } = props;

  const [openSate, setOpenState] = useState(open);
  const openFinal = manageOpened ? open : openSate;

  const setOpen = () => {
    onOpen({ isOpened: manageOpened ? open : !openSate });
    !manageOpened && setOpenState(!openSate);
  };

  const renderChild = (name) => <>{findByType(children, name)}</>;

  const arrowIcon = openFinal ? 'caret-down-fill' : 'caret-right-fill';
  const wrapperClasses = classNames(
    className,
    'wrapper',
    {
      '--open': openFinal,
      '--close': !openFinal,
    },
  );

  return (
    <div className={wrapperClasses} ref={ref} dir="ltr">
      <div className="wrapper-header">
        <div className="header-group" onClick={setOpen}>
          <Icon icon={arrowIcon} size={iconSize} />
          <h3 className="title">
            {title}
          </h3>
        </div>
        {showButton ? renderChild('HeaderEnd') : null}
      </div>
      {openFinal && (
      <div className={classNames({ 'wrapper-content': showWrapper })}>
        {renderChild('Content')}
      </div>
      )}
    </div>
  );
}));

Wrapper.Content = createSubComponent('Content');
Wrapper.Button = createSubComponent('HeaderEnd');

Wrapper.defaultProps = {
  open: false,
  title: '',
  showWrapper: false,
  manageOpened: false,
  onOpen: () => void 0,
  className: '',
};

Wrapper.propTypes = {
  open: propTypes.bool,
  title: propTypes.string,
  showWrapper: propTypes.bool,
  showButton: propTypes.bool,
  manageOpened: propTypes.bool,
  onOpen: propTypes.func,
  iconSize: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  className: propTypes.oneOfType([propTypes.string, propTypes.object]),
};

export default Wrapper;
