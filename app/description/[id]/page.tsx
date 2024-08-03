import React from 'react'
import JobData from '../../../_data/jobs.json'
import Description from '../components/Description'
import job from '@/app/components/JobInterface';


interface props{
    params:{
        id:string;
    }
}

const page = ({params:{id}}:props) => {
    // const data = JobData.job_postings.filter((val,index)=> String(index) == id) as job[]
    const data = JobData.job_postings.filter((val, index) => String(index) === id)[0] as job; // Extracting single job

  return (
    <>
    <Description  data = {data}/>
    </>
  )
}

export default page