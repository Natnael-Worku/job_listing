export default async function getJobs(token: string) {
    const res = await fetch("https://akil-backend.onrender.com/opportunities/search ", {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    });
  
    return res.json();
  }