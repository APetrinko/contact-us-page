import React, { memo, useState, useEffect } from 'react';
import cn from 'classnames';
import menuOpen from '../../styles/imgs/menu-open.png';
import menuClose from '../../styles/imgs/menu-close.png';
import { NavList } from './NavList';

export const Header: React.FC = memo(() => {
  const [isOpenMenu, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth < 640) {
      setIsMobile(true);
    } else {
      setIsDesktop(true);
    }
  }, []);

  return (
    <header className={cn('header', { header__mobile: isOpenMenu && isMobile })}>
      <div className="nav">
        <div className="nav__link">
          <a href="/" className="nav__link--logo">
            <h1 className={cn('nav__link--logo-el', { open: isOpenMenu })}>Logo Here</h1>
          </a>
        </div>

        {isMobile && (
          <div
            className="nav__link--menu nav__link--menu-open"
            onClick={() => setIsOpen(!isOpenMenu)}
            aria-hidden="true"
          >
            <img className="nav__link--menu-logo" src={isOpenMenu ? menuClose : menuOpen} alt="menu-open" />
          </div>
        )}

      </div>

      {isMobile && isOpenMenu ? (
        <NavList isOpenMenu={isOpenMenu} setIsOpen={setIsOpen} />
      ) : isDesktop && (
        <NavList isOpenMenu={isOpenMenu} setIsOpen={setIsOpen} />
      )}
    </header>
  );
});
