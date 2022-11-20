import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles from './Components.module.css';

function Harmburger({ onClick, isOpen }) {
  const [isScrolling, setIsScrolling] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setIsScrolling(latest);
    });
  }, [scrollYProgress]);

  const classes = isScrolling > 0.15 ? styles.darkLine : styles.line;

  const variants = {
    open: {
      transition: {
        type: 'spring',
        stiffness: 30,
      },
    },
    closed: {
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 40,
      },
    },
  };

  return (
    <motion.div
      aria-controls="menu"
      className={styles.harmburger}
      onClick={onClick}
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
    >
      <span className={classes}></span>
      <span className={classes}></span>
    </motion.div>
  );
}

export default Harmburger;
