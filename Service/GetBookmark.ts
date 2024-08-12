export default async function getBookmarks(token:string) {
    if (!token) {
        return;
    }
    try {
      const response = await fetch(
        "https://akil-backend.onrender.com/bookmarks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        return response.json();
        // const jsonData = await response.json();
        // setData(jsonData.data);
        // console.log(jsonData.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  }
