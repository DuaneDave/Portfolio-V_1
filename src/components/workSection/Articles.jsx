import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import articles from '../../data/articles';

import styles from './Projects.module.css';

function Articles() {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <span>
        <h2>./articles</h2>
        <p>Selected articles written in the past</p>
      </span>
      <div className={styles.cardContainer}>
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className={styles.card}
            whileHover={{
              translateY: -8,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
            }}
            onClick={() => navigate(`/articles/${article.id}`)}
          >
            <img src={article.image} alt="article screenshot" />

            <span>
              <p>{article.title}</p>
              <a href={article.url} rel="noreferrer" target="_blank">
                see article
              </a>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
