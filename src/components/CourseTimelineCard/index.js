// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTitle, duration, description, tagsList} = props

  return (
    <div className="course-card-container">
      <div className="row-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="row-container-2">
          <AiFillClockCircle className="circle" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="row-container-3">
        {tagsList.map(each => (
          <p className="tags-list-items">{each.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
