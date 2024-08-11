export default async function getSingleJob(id:string,token:string) {
    const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id} `,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
});
  
    return res.json();
  }
  