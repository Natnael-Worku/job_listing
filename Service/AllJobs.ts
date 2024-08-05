export default async function getJobs() {
    const res = await fetch("https://akil-backend.onrender.com/opportunities/search ");
  
    return res.json();
  }