import React, { memo, useState, useEffect } from 'react';
import cn from 'classnames';
import menuOpen from '../styles/imgs/menu-open.png';
import menuClose from '../styles/imgs/menu-close.png';
import userLogo from '../styles/imgs/userlogo.png';
import busketLogo from '../styles/imgs/busket.png';

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
        <nav className={(cn('navigation', { navigation__mobile: !isOpenMenu }))}>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/" className="navigation__link">Home</a>
            </li>
            <li className="navigation__item">
              <a href="#features" className="navigation__link">Features</a>
            </li>
            <li className="navigation__item">
              <a href="#blog" className="navigation__link">Blog</a>
            </li>
            <li className="navigation__item">
              <a href="#shop" className="navigation__link">Shop</a>
            </li>
            <li className="navigation__item">
              <a href="#about" className="navigation__link">About</a>
            </li>
            <li className="navigation__item">
              <a href="#contact" className="navigation__link">Contact</a>
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
                  <img src={userLogo} alt="user" />
                </li>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="link__icon"
              >
                <li className="navigation__user__item cartNav">
                  <img src={busketLogo} alt="user" />
                </li>
              </button>
            </ul>
          </div>
        </nav>
      ) : isDesktop && (
        <nav className={(cn('navigation', { navigation__mobile: !isOpenMenu }))}>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/" className="navigation__link">Home</a>
            </li>
            <li className="navigation__item">
              <a href="#features" className="navigation__link">Features</a>
            </li>
            <li className="navigation__item">
              <a href="#blog" className="navigation__link">Blog</a>
            </li>
            <li className="navigation__item">
              <a href="#shop" className="navigation__link">Shop</a>
            </li>
            <li className="navigation__item">
              <a href="#about" className="navigation__link">About</a>
            </li>
            <li className="navigation__item">
              <a href="#contact" className="navigation__link">Contact</a>
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
                  <img src={userLogo} alt="user" />
                </li>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="link__icon"
              >
                <li className="navigation__user__item cartNav">
                  <img src={busketLogo} alt="user" />
                </li>
              </button>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
});
