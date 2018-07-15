import React from 'react';
import JobRow from '../JobRow/JobRow';
import './jobList.css';

const JobList = (props)=>{
  return(
    <div className="JobList">
      {props.jobs.map((job,index)=>{
        return <JobRow
          title={job.title}
          location={job.location}
          company={job.company}
          type={job.type}
          toggleFav={()=>props.toggleFav(job.id)}/>
      })}
    </div>
  )
}

export default JobList;
