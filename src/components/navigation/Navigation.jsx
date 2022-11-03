/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Navigation.module.css';
import items from './navItems';
import NavItem from './components/NavItem';
import Harmburger from './components/Harmburger';
import Socials from '../../reusables/socials/Socials';
import Backdrop from '../../reusables/backdrop/Backdrop';

const variants = {
  open: {
    opacity: 1,
    transition: { type: 'spring', stiffness: 30 },
  },
  closed: {
    opacity: 0,
    transition: { delay: 0.3, type: 'spring', stiffness: 30 },
  },
};

const itemParent = {
  open: { transition: { staggerChildren: 0.09, delayChildren: 0.7 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <a href="#" className={styles.logo}>
        DAVID
      </a>

      <Harmburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

      <motion.div
        className={styles.sidebar}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        {/* <div aria-controls="theme">
          <span className={styles.theme}></span>
        </div> */}
        <motion.ul variants={itemParent}>
          {items.map((item) => (
            <NavItem
              key={item.text}
              link={item.link}
              text={item.text}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </motion.ul>
        <motion.span className={styles.socialIcons} variants={itemParent}>
          <Socials className={styles.socials} />
        </motion.span>
      </motion.div>

      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
    </nav>
  );
}

export default Navigation;
