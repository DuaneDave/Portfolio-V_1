/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsArrowRight } from 'react-icons/bs';

import Container from '../../reusables/container/Container';
import styles from './Works.module.css';

function Works() {
  return (
    <Container className={styles.works}>
      <div className={styles.placeholder}>
        <div className={styles.projects}>
          <h3>
            A catalog <br /> of my works.
          </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          <a href="#" className={styles.worksButton}>
            View All
            <BsArrowRight className={styles.icon} />
          </a>
        </div>

        <div className={styles.article}>
          <h3>
            A catalog <br /> of my articles.
          </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          <a href="#" className={styles.worksButton}>
            View All
            <BsArrowRight className={styles.icon} />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Works;
