import { motion } from 'framer-motion';

function Button({ children, onClick, className, ...props }) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.9,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
