import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import Container from '../../reusables/container/Container';
import styles from './Works.module.css';

function Works() {
  return (
    <Container className={styles.works} id='projects'>
      <div className={styles.placeholder}>
        <div className={styles.projects}>
          <h3>
            A catalog <br /> of my works.
          </h3>
          <p>Contains both featured and solo projects in my dev journey.</p>
          <Link to='projects' className={styles.worksButton}>
            View All
            <BsArrowRight className={styles.icon} />
          </Link>
        </div>

        <div className={styles.article}>
          <h3>
            A catalog <br /> of my articles.
          </h3>
          <p>Shows a list of articles both tutorials and mental support</p>
          <Link to='/articles' className={styles.worksButton}>
            View All
            <BsArrowRight className={styles.icon} />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Works;
