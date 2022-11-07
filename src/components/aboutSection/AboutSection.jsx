import styles from './AboutSection.module.css';
import Container from '../../reusables/container/Container';
import Button from '../../reusables/button/Button';

function AboutSection() {
  return (
    <Container className={styles.about}>
      <div className={styles.card}>
      <div className={styles.aboutPlaceholder}>
          <div></div>
        </div>
        <div className={styles.aboutDetails}>
          <h2 className={styles.title}>About me.</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos
            dicta quos, fuga unde error fugit inventore ad accusamus praesentium
            quis ullam beatae placeat, saepe cumque distinctio suscipit? Odio,
            pariatur di
          </p>
          <Button className={styles.aboutButton}>Get My Resume</Button>
        </div>
      </div>
    </Container>
  );
}

export default AboutSection;
