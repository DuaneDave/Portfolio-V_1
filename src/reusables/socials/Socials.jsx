import { motion } from 'framer-motion';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiAngellist } from 'react-icons/si';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100, duration: 0.7, delay: 0.3 } },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: { y: { stiffness: -1000 } },
  },
};

function Socials({ className }) {
  return (
    <>
      <motion.a
        whileHover={{ scale: 1.1 }}
        target="_blank"
        href="https://github.com/DuaneDave"
        rel="noreferrer"
        variants={variants}
      >
        <AiFillGithub className={className} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        target="_blank"
        href="https://www.linkedin.com/in/david-obiebi/"
        rel="noreferrer"
        variants={variants}
      >
        <AiFillLinkedin className={className} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        target="_blank"
        href="https://angel.co/u/okiemute-david-obiebi"
        rel="noreferrer"
        variants={variants}
      >
        <SiAngellist className={className} />
      </motion.a>
    </>
  );
}

export default Socials;
