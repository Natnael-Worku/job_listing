export default async function getSingleJob(id:string) {
    const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id}` );
  
    return res.json();
  }
  