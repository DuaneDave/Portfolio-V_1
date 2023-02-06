import { motion } from 'framer-motion';

function Container({ children, className, id, ...rest }) {
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
      id={id}
    >
      {children}
    </motion.section>
  );
}

export default Container;
