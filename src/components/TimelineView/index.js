// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  return (
    <div className="time-line-view-container">
      <h1 className="my-journey">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>

      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return (
              <div>
                <CourseTimelineCard
                  courseTitle={each.courseTitle}
                  duration={each.duration}
                  description={each.description}
                  tagsList={each.tagsList}
                />
              </div>
            )
          }
          return (
            <div>
              <ProjectTimelineCard
                description={each.description}
                duration={each.duration}
                imageUrl={each.imageUrl}
                projectTitle={each.projectTitle}
                projectUrl={each.projectUrl}
                title={each.title}
              />
            </div>
          )
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
