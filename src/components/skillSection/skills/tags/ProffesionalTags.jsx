import {proffessionalSkills} from './skillItems';
import styles from './Language.module.css';

function proffessionalTags() {
  return (
    <ul className={styles.proffessionalTag}>
      {proffessionalSkills.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default proffessionalTags;
