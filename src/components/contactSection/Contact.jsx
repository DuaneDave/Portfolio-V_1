import { useState } from 'react';

import Form from './Form';
import Container from '../../reusables/container/Container';
import Alert from '../../reusables/alert/Alert';

import styles from './Contact.module.css';

function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  console.log(showAlert);

  return (
    <Container className={styles.contact} id="contact">
      <div className={styles.placeholder}>
        <div className={styles.contactDetails}>
          <h2>Get in touch</h2>
          <p>
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </p>
        </div>
        <Form onAlert={setShowAlert} />
      </div>

      {showAlert && <Alert />}
    </Container>
  );
}

export default Contact;
