import React from 'react'
import JobData from '@/_data/jobs.json'
import Description from '@/components/Description'
import {JobPosting} from '@/Types/Jobs';
import getSingleJob from '@/Service/SingleJob';

interface props{
    params:{
        id:string;
    }
}


export default async function page  ({params:{id}}:props)  {
    // const data = JobData.job_postings.filter((val,index)=> String(index) == id) as job[]
    const {data,error} = await getSingleJob(id);
    

  return (
    <>
    <Description  data = {data}/>
    </>
  )
}
