/**
 * Retrieves job listings based on the provided token.
 * @param token - The authentication token.
 * @returns A Promise that resolves to the job listings.
 */
export default async function getJobs(token: string) {
    if (token === "") {
      const res = await fetch("https://akil-backend.onrender.com/opportunities/search ");
    
      return res.json();
    }
    else{
      console.log(token, "token from service");
      const res = await fetch("https://akil-backend.onrender.com/opportunities/search ", {
        headers: {
          Authorization: `Bearer ${token}`,
        }, 
      });
    // console.log( await res.json(), "res from service");
      return res.json();
    }
    
  }