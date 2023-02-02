import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/workSection/ProjectDetails';
import projects from '../data/projects';

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === Number(projectId));

  return <ProjectDetails payload={project} />;
}

export default ProjectDetailsPage;
