import Form from './Form';
import Container from '../../reusables/container/Container';
import styles from './Contact.module.css';

function Contact() {
  return (
    <Container className={styles.contact}>
      <div className={styles.placeholder}>
        <div className={styles.contactDetails}>
          <h2>Get in touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod.
          </p>
        </div>
        <Form />
      </div>
    </Container>
  );
}

export default Contact;
