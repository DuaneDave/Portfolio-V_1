import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    scrollY.onChange((latest) => {
      latest > 0.15 ? setShow(true) : setShow(false);
    });
  }, [scrollY]);

  const variants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <motion.span
      variants={variants}
      animate={show ? 'open' : 'closed'}
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <HiOutlineChevronDoubleUp />
    </motion.span>
  );
}

export default BackToTop;
