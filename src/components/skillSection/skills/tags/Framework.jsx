import { frameworks } from './skillItems';
import styles from './Language.module.css';

function Framework() {
  return (
    <ul className={styles.languages}>
      {frameworks.map((item) => (
        <li key={item.id}>
          <span></span>
          <img src={item.icon} alt={item.alt} />
          <span className={styles.langName}>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Framework;
