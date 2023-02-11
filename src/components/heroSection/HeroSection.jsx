import styles from './HeroSection.module.css';
import Socials from '../../reusables/socials/Socials';
import Button from '../../reusables/button/Button';
import BackToTop from '../../reusables/backToTop/BackToTop';
import user from '../../assets/user.png';

function HeroSection() {
  return (
    <section className={styles.heroContainer} id="home">
      <div className={styles.leftHalf}>
        <div>
          <h1>
            Software
            <br />
            Developer.
          </h1>

          <p>
          I am David Obiebi. I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
          </p>

          <Button
            className={styles.heroButton}
            onClick={() => (window.location.href = '#contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.placeholder}>
          <img src={user} alt="user" />
        </div>
      </div>
      <span className={styles.socialLinks}>
        <Socials className={styles.socialIcon} />
      </span>
      <BackToTop />
    </section>
  );
}

export default HeroSection;
