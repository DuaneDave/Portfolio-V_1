import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100, duration: 0.3 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

function NavItems({ link, text, onClick }) {
  return (
    <li>
      <motion.a
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={`/#${link}`}
        onClick={onClick}
      >
        {text}
      </motion.a>
    </li>
  );
}

export default NavItems;
