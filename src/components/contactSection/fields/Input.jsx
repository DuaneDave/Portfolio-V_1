import { useField } from 'formik';

function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className={meta.touched && meta.error ? 'invalid' : ''}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <textarea
        aria-label={label}
        className={meta.touched && meta.error ? 'invalid' : ''}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default Input;
export { TextArea };
