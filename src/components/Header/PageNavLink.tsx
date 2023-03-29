import React, { FC } from 'react';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => {
  const location = useLocation();

  return (
    <NavLink
      to={to}
      className={cn('navigation__link', {
        'navigation__link--active': location.pathname === `/${to}`,
      })}
    >
      {text}
    </NavLink>
  );
};
