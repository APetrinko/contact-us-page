import React, { FC, memo } from 'react';
import { PageNavLink } from './PageNavLink';

type Props = {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  onClick?: () => void;
};

const navPath = [
  { to: '/', text: 'Home' },
  { to: 'features', text: 'Features' },
  { to: 'blog', text: 'Blog' },
  { to: 'shop', text: 'Shop' },
  { to: 'about', text: 'About' },
  { to: 'contact', text: 'Contact' },
];

export const NavList: FC<Props> = memo((props: Props) => {
  const {
    setIsOpen,
    onClick,
  } = props;

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navPath.map(navLink => (
          <li className="navigation__item" key={navLink.to}>
            <PageNavLink to={navLink.to} text={navLink.text} onClick={onClick} />
          </li>
        ))}
      </ul>

      <div className="navigation__user">
        <ul className="navigation__user__list">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="link__icon-user"
          >
            <li className="navigation__user__item cartNav-user">
            </li>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="link__icon-bascket"
          >
          </button>
        </ul>
      </div>
    </nav>
  );
});

NavList.defaultProps = {
  onClick: () => { },
};
