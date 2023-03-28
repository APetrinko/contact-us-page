// import React, { memo } from 'react';
// import cn from 'classnames';
// import { Link, useLocation } from 'react-router-dom';

// type Props = {
//   isOpenMenu: boolean;
//   setIsOpen: (value: React.SetStateAction<boolean>) => void;
// };

// export const NavList: React.FC<Props> = memo((props: Props) => {
//   const {
//     isOpenMenu,
//     setIsOpen,
//   } = props;

//   const location = useLocation();

//   return (
//     <nav className={(cn('navigation', { navigation__mobile: !isOpenMenu }))}>
//       <ul className="navigation__list">
//         <li className="navigation__item">
//           <Link
//             to="/"
//             className={cn('navigation__link', {
//               'navigation__link--active': location.pathname === '/',
//             })}
//           >
//             Home
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link
//             to="/features"
//             className={cn('navigation__link', {
//               'navigation__link--active': location.pathname === '/features',
//             })}
//           >
//             Features
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link
//             to="/blog"
//             className={cn('navigation__link', {
//               'navigation__link--active': location.pathname === '/blog',
//             })}
//           >
//             Blog
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link
//             to="/shop"
//             className={cn('navigation__link', {
//               'navigation__link--active': location.pathname === '/shop',
//             })}
//           >
//             Shop
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link
//             to="/about"
//             className={cn('navigation__link', {
//               'navigation__link--active': location.pathname === '/about',
//             })}
//           >
//             About
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link
//             to="/contact"
//             className={cn('navigation__link', {
//               'navigation__link--active': location.pathname === '/contact',
//             })}
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>

//       <div className="navigation__user">
//         <ul className="navigation__user__list">
//           <button
//             type="button"
//             onClick={() => setIsOpen(false)}
//             className="link__icon"
//           >
//             <li className="navigation__user__item cartNav">
//               <img src="" alt="user" />
//             </li>
//           </button>

//           <button
//             type="button"
//             onClick={() => setIsOpen(false)}
//             className="link__icon"
//           >
//             <li className="navigation__user__item cartNav">
//               <img src="" alt="user" />
//             </li>
//           </button>
//         </ul>
//       </div>
//     </nav>
//   );
// });

import React, { memo } from 'react';
import cn from 'classnames';

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
