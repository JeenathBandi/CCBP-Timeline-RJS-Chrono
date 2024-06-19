// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {title, duration, description, imageUrl, projectTitle, projectUrl} =
    props
  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="project-row-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-row-container">
          <AiFillCalendar />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
