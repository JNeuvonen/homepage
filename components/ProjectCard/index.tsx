import { Tooltip } from '@mui/material'
import { LinkIcon } from '../../utils/icons'
interface ProjectTypes {
  name: string
  githubUrl: string
  description: JSX.Element
  picture: object
  demo: string
}
const ProjectCard = ({ project }: { project: ProjectTypes }) => {
  return (
    <div className="project-card">
      {project.description}
      <a
        className="project-card__demo small-icon-button flex-box align-items-center"
        style={{ columnGap: '10px' }}
        href={project.demo}
      >
        <div>Demo</div>
        <LinkIcon width={18} height={18} />
      </a>
      <Tooltip title={<p style={{ fontSize: 19 }}>Link to Github</p>}>
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
      </Tooltip>
    </div>
  )
}
export default ProjectCard
