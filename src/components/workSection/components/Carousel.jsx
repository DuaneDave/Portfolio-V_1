import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

import styles from './Carousel.module.css';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > images.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <div className={styles.carousel + ' flex align-x align-y'}>
      <BsFillArrowLeftCircleFill className={styles.left} onClick={prev} />

      <span className={styles.slideshow + ' flex'}>
        <motion.img
          key={index}
          src={images[index]}
          alt="project screenshot"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
          }}
        />

        <BsFillArrowRightCircleFill className={styles.right} onClick={next} />
      </span>
    </div>
  );
}

export default Carousel;
