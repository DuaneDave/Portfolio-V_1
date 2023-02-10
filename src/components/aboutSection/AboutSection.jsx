import styles from './AboutSection.module.css';
import Container from '../../reusables/container/Container';
import Button from '../../reusables/button/Button';
import user from '../../assets/user.png';

function AboutSection() {
  return (
    <Container className={styles.about} id="about">
      <div className={styles.card}>
        <div className={styles.aboutPlaceholder}>
          <img src={user} alt="user" />
        </div>

        <div className={styles.aboutDetails}>
          <h2>About me.</h2>
          <p>
            I am David Obiebi, a full-stack developer with deep love for
            algorithms and data structures, well-structured code, and
            collaboration. I graduated from Microverse, an online school where I
            spent eight hours daily in a cross-cultural remote setting pair
            programming and learning about different concepts like
            object-oriented programming, unit testing, asynchronous processes
            and much more.
          </p>
          <Button
            className={styles.aboutButton}
            onClick={() =>
              (window.open(
                'https://docs.google.com/document/d/1Xlt7Mv3AJGTt6aEDGzkUg6WryIEBx10mCXePUH9t-Qg/edit'))
            }
          >
            Get My Resume
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default AboutSection;
