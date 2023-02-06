import Carousel from './components/Carousel';
import styles from './ProjectDetails.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';

function ProjectDetails({ payload }) {
  const { title, description, tech_stack, live_link, github_link } = payload;

  return (
    <section className={styles.detailsContainer + ' flex align-x'}>
      <div className={styles.details + ' flex flex-column align-y'}>
        <h2>{title}</h2>
        <div className={styles.links + ' flex'}>
          <a
            href={live_link}
            className="flex align-y"
            rel="noreferrer"
            target="_blank"
          >
            Live demo
            <BsArrowUpRight />
          </a>
          <a
            href={github_link}
            className="flex align-y"
            rel="noreferrer"
            target="_blank"
          >
            View source
            <AiFillGithub />
          </a>
        </div>
        <Carousel images={payload.screenshots} />

        <div className={styles.stack + ' flex align-x'}>
          {tech_stack.map((stack, index) => (
            <span key={index}>{stack}</span>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default ProjectDetails;
