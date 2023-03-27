import React, { memo, useState } from 'react';
import menuOpen from '../styles/imgs/menu-open.png';
import menuClose from '../styles/imgs/menu-close.png';

export const Header: React.FC = memo(() => {
  const [isOpenMenu, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav">
        <div className="nav__link">
          <a href="/" className="nav__link--logo">
            <h1 className="nav__link--logo-el">Logo Here</h1>
          </a>
        </div>

        <div
          className="nav__link--menu nav__link--menu-open"
          onClick={() => setIsOpen(!isOpenMenu)}
          aria-hidden="true"
        >
          <img className="nav__link--menu-logo" src={isOpenMenu ? menuClose : menuOpen} alt="menu-open" />
        </div>
      </div>
    </header>
  );
});
