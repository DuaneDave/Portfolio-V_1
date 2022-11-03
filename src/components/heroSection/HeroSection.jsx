import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.leftHalf}>
        <h1>Software Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nobis
          quam mollitia maxime, dicta iusto dignissimos exercitationem autem
          nostrum expedita?
        </p>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.placeholder}></div>
      </div>
    </section>
  );
}

export default HeroSection;
