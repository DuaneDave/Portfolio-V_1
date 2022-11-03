import styles from './HeroSection.module.css';
import Socials from '../../reusables/socials/Socials';
import Button from '../../reusables/button/Button';

function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.leftHalf}>
        <div>
          <h1>
            Software
            <br />
            Developer.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nobis
            quam mollitia maxime, dicta iusto dignissimos exercitationem autem
            nostrum expedita?
          </p>

          <Button className={styles.heroButton}>Contact Me</Button>
        </div>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.placeholder}></div>
      </div>
      <span className={styles.socialLinks}>
        <Socials className={styles.socialIcon} />
      </span>
    </section>
  );
}

export default HeroSection;
