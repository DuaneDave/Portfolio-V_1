import { motion } from 'framer-motion';

function Backdrop({ onClick }) {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={
        ({ opacity: 0 },
        { transition: { duration: 0.5, type: 'spring', delay: 0.4 } })
      }
    />
  );
}

export default Backdrop;
