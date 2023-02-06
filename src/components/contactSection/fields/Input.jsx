import { useField } from 'formik';

import styles from './Input.module.css';

function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className={styles.wrapper}>
        <label htmlFor={props.name}>{label}</label>
        <input
          className={meta.touched && meta.error ? 'invalid' : ''}
          {...field}
          {...props}
        />
        <span className={styles.underline}></span>
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.invalid}>{meta.error}</div>
      ) : null}
    </div>
  );
}

function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        className={meta.touched && meta.error ? 'invalid' : ''}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.invalid}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export default Input;
export { TextArea };
