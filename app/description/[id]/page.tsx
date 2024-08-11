'use client';
import React,{useState,useEffect} from 'react'

import Description from '@/components/Description'
import {JobPosting} from '@/Types/Jobs';
import getSingleJob from '@/Service/SingleJob';
import { getSession } from 'next-auth/react';

interface props{
    params:{
        id:string;
    }
}


export default  function page  ({params:{id}}:props)  {
  // const [token, setToken] = useState("");
  const [jobData, setJobData] = useState<JobPosting | null>();
  
  useEffect(() => {
    const y = async () => {
      const session = await getSession();
      // console.log(session, "session object from card made");
      // setToken(session?.accessToken);
      localStorage.setItem('accessSession',session?.accessToken)
    };
    y();
    const gettingsingleJOb = async() =>{

       const {data} = await getSingleJob(id,localStorage.getItem('accessSession') ?? '')
      setJobData(data)
    }
    gettingsingleJOb()
    console.log(jobData, "data for the single job")
  });
    // const data = JobData.job_postings.filter((val,index)=> String(index) == id) as job[]
    // const {data,error} = ;
    

  return (
    <>
    <Description  data = {jobData}/>
    </>
  )
}
