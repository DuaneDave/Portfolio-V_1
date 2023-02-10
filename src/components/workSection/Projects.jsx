import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projects from '../../data/projects';

import styles from './Projects.module.css';

function Projects() {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <span>
        <h2>./projects</h2>
        <p>Selected projects i've worked on in the past</p>
      </span>
      <div className={styles.cardContainer}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.card}
            whileHover={{
              translateY: -8,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
            }}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img src={project.screenshots[0]} alt="project screenshot" />

            <span>
              <p>{project.title}</p>
              <a href={project.live_link} rel="noreferrer" target="_blank">
                see project
              </a>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
