import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Container from '../../reusables/container/Container';
import Languages from './skills/Languages';
import Frameworks from './skills/Frameworks';
import Professional from './skills/Professional';
import Tools from './skills/Tools';
import styles from './Skills.module.css';

function Skills() {
  const [isTabbed, setIsTabbed] = useState(0);
  const keyPressHandler = (e) => {
    if (e.key === 'ArrowRight') {
      if (isTabbed === 3) {
        setIsTabbed(0);
      } else {
        setIsTabbed((prev) => prev + 1);
      }
    }

    if (e.key === 'ArrowLeft') {
      if (isTabbed === 0) {
        setIsTabbed(3);
      } else {
        setIsTabbed((prev) => prev - 1);
      }
    }
  };

  return (
    <Container className={styles.skills} id='skills'>
      <div className={styles.skillDetails}>
        <h2>My skills.</h2>
        <p>
        A couple of tech stacks and tools I have integrated into my workflow to deliver efficient, well-tested and scalable applications to clients.
        </p>
      </div>
      <div className={styles.card}>
        <ul className={styles.tabHeader}>
          <li
            tabIndex="0"
            onClick={() => setIsTabbed(0)}
            onFocus={() => setIsTabbed(0)}
            onKeyDown={keyPressHandler}
          >
            Languages
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
            Frameworks
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
            Tools
            {isTabbed === 2 && (
              <motion.span
                layoutId="underline"
                className={styles.active}
              ></motion.span>
            )}
          </li>

          <li
            tabIndex="3"
            onClick={() => setIsTabbed(3)}
            onFocus={() => setIsTabbed(3)}
            onKeyDown={keyPressHandler}
          >
            Professional
            {isTabbed === 3 && (
              <motion.span
                layoutId="underline"
                className={styles.active}
              ></motion.span>
            )}
          </li>
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={isTabbed}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              duration: 0.5 ,
              type: 'spring',
              stiffness: 30,
            }}
          >
            {isTabbed === 0 && <Languages />}
            {isTabbed === 1 && <Frameworks />}
            {isTabbed === 2 && <Tools />}
            {isTabbed === 3 && <Professional />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
}

export default Skills;

// initial={{ width: '0%' }}
// animate={{ width: isTabbed === 0 ? '100%' : '0%' }}
// transition={{ duration: 0.5 }}
