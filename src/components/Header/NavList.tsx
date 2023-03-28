import React, { memo } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  isOpenMenu: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

export const NavList: React.FC<Props> = memo((props: Props) => {
  const {
    isOpenMenu,
    setIsOpen,
  } = props;

  return (
    <nav className={(cn('navigation', { navigation__mobile: !isOpenMenu }))}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="features" className="navigation__link">Features</Link>
        </li>
        <li className="navigation__item">
          <Link to="blog" className="navigation__link">Blog</Link>
        </li>
        <li className="navigation__item">
          <Link to="shop" className="navigation__link">Shop</Link>
        </li>
        <li className="navigation__item">
          <Link to="about" className="navigation__link">About</Link>
        </li>
        <li className="navigation__item">
          <Link to="contact" className="navigation__link">Contact</Link>
        </li>
      </ul>

      <div className="navigation__user">
        <ul className="navigation__user__list">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="link__icon"
          >
            <li className="navigation__user__item cartNav">
              <img src="" alt="user" />
            </li>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="link__icon"
          >
            <li className="navigation__user__item cartNav">
              <img src="" alt="user" />
            </li>
          </button>
        </ul>
      </div>
    </nav>
  );
});
