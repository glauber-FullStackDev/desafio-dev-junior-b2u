import { useField } from "formik";
import styles from "./myTextInput.module.css";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const id = props.name;
  return (
    <div className={styles.myInputDiv}>
      <label htmlFor={props.name}>{label}</label>
      <div className={styles.inputDiv}>
        <input className="text-input" id={id} {...field} {...props} />
        <div>
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyTextInput;
