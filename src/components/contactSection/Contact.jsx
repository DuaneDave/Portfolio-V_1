import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../../reusables/button/Button';
import Input, { TextArea } from './fields/Input';

function Contact() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
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
      {({ handleSubmit, dirty, isValid }) => (
        <form onSubmit={handleSubmit}>
          <Input label="Name" name="name" type="text" />
          <Input label="Email" name="email" type="email" />
          <TextArea label="Message" name="message" />
          <Button type="submit" disabled={!(dirty && isValid)}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default Contact;
