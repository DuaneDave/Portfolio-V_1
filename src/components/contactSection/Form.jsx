import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../../reusables/button/Button';
import Input, { TextArea } from './fields/Input';
import styles from './Contact.module.css';

function Form() {
  return (
    <Formik
      initialValues={{
        fname: '',
        lname: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        fname: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lname: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string()
          .max(200, 'Must be 200 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fullName}>
            <Input
              label="First Name"
              name="fname"
              type="text"
              placeholder="Enter Your First Name"
            />
            <Input
              label="Last Name"
              name="lname"
              type="text"
              placeholder="Enter Your Last Name"
            />
          </div>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <TextArea label="Message" name="message" />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
