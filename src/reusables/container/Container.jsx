import { motion } from 'framer-motion';

function Container({ children, className, ...rest }) {
  const classes = 'section ' + className;
  return (
    <motion.section
      className={classes}
      {...rest}
      transition={
        {
          duration: 0.5,
          ease: 'easeInOut',
        }
      }
    >
      {children}
    </motion.section>
  );
}

export default Container;
