import { motion } from 'framer-motion';
import {AiFillCheckCircle} from 'react-icons/ai';

import styles from './Alert.module.css';

function Alert() {
  return (
    <motion.div
      className={styles.alert}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <p className='flex align-y'>
        <AiFillCheckCircle className={styles.icon} />
        Message sent successfully
      </p>
    </motion.div>
  );
}

export default Alert;