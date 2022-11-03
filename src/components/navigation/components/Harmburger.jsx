import { motion } from 'framer-motion';

import styles from './Components.module.css';

function Harmburger({ onClick, isOpen }) {
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
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </motion.div>
  );
}

export default Harmburger;
