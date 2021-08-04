import classNames from 'classnames';

export const Td = ({ centered, render, children }) => (
  <td className={classNames('swfTd', centered && 'center')}>
    {render ? render({ centered, children }) : children}
  </td>
);
