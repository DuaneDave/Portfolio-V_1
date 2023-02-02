import { Link } from 'react-router-dom';
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
          <Link to='projects' className={styles.worksButton}>
            View All
            <BsArrowRight className={styles.icon} />
          </Link>
        </div>

        <div className={styles.article}>
          <h3>
            A catalog <br /> of my articles.
          </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          <Link to='articles' className={styles.worksButton}>
            View All
            <BsArrowRight className={styles.icon} />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Works;
