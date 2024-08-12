/**
 * Retrieves a single job based on the provided ID and token.
 * @param id - The ID of the job to retrieve.
 * @param token - The token for authorization.
 * @returns A Promise that resolves to the JSON response of the job.
 */
export default async function getSingleJob(id:string,token:string) {
  if (!token){
    const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id} `);
    return res.json();
  }
  else{
    const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id} `,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
});
  
    return res.json();
  }
    
  }
  