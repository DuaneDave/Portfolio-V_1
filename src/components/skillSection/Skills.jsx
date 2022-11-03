import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import FrontEnd from './skills/FrontEnd';
import BackEnd from './skills/BackEnd';
import Professional from './skills/Professional';
import styles from './Skills.module.css';

function Skills() {
  const [isTabbed, setIsTabbed] = useState(0);
  const keyPressHandler = (e) => {
    if (e.key === 'ArrowRight') {
      if (isTabbed === 2) {
        setIsTabbed(0);
      } else {
        setIsTabbed((prev) => prev + 1);
      }
    }

    if (e.key === 'ArrowLeft') {
      if (isTabbed === 0) {
        setIsTabbed(2);
      } else {
        setIsTabbed((prev) => prev - 1);
      }
    }
  };

  return (
    <div>
      <ul className={styles.tabHeader}>
        <li
          tabIndex="0"
          onClick={() => setIsTabbed(0)}
          onFocus={() => setIsTabbed(0)}
          onKeyDown={keyPressHandler}
        >
          Front End
          {isTabbed === 0 && (
            <motion.span
              layoutId="underline"
              className={styles.active}
            ></motion.span>
          )}
        </li>

        <li
          tabIndex="1"
          onClick={() => setIsTabbed(1)}
          onFocus={() => setIsTabbed(1)}
          onKeyDown={keyPressHandler}
        >
          Back End
          {isTabbed === 1 && (
            <motion.span
              layoutId="underline"
              className={styles.active}
            ></motion.span>
          )}
        </li>

        <li
          tabIndex="2"
          onClick={() => setIsTabbed(2)}
          onFocus={() => setIsTabbed(2)}
          onKeyDown={keyPressHandler}
        >
          Professional
          {isTabbed === 2 && (
            <motion.span
              layoutId="underline"
              className={styles.active}
            ></motion.span>
          )}
        </li>
      </ul>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={isTabbed}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isTabbed === 0 && <FrontEnd />}
          {isTabbed === 1 && <BackEnd />}
          {isTabbed === 2 && <Professional />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Skills;

// initial={{ width: '0%' }}
// animate={{ width: isTabbed === 0 ? '100%' : '0%' }}
// transition={{ duration: 0.5 }}
