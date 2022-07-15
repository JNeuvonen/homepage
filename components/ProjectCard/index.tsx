import { LinkIcon } from '../../utils/icons'
interface ProjectTypes {
  name: string
  githubUrl: string
  description: JSX.Element
  picture: object
}
const ProjectCard = ({ project }: { project: ProjectTypes }) => {
  return (
    <div className="project-card">
      <div>{project.description}</div>
      <div className="project-card__name">
        <a
          className="flex-box align-items-center content-center link-cancel-default"
          target={'_blank'}
          rel={'noreferrer'}
          href={project.githubUrl}
          style={{ columnGap: 10 }}
        >
          <h3>{project.name}</h3>
          <div style={{ marginTop: 5 }}>
            <LinkIcon width={25} height={25} />
          </div>
        </a>
      </div>
    </div>
  )
}
export default ProjectCard
