"use client";
import FavoriteCard from "@/components/FavoriteCard";
import SessionType from "@/Types/SessionType";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import getBookmarks from "@/Service/GetBookmark";
import Data from "@/Types/BookmarkType";

/**
 * Represents a page component for displaying favorite items.
 */
const page = () => {
  const session = useSession() as unknown as SessionType | null;
  const [token, setToken] = useState<string>("");
  const [data, setData] = useState<Data[] | undefined>();
  const [id, setId] = useState<string>("");

  useEffect(() => {
    setToken(session?.data?.accessToken ?? "");

    const fetchData = async () => {
      const bookmark = await getBookmarks(token);
      setData(bookmark?.data ?? []);
    };

    fetchData();

    const filtering = () => {
      if (id) {
        data?.filter(item => id !== item.eventID);
      }
    };

    filtering();
  }, [id, session?.data?.accessToken, data]);

  return (
    <div className="flex flex-col md:flex-row  gap-10 items-center  justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        {data?.map((item, index) => {
          return <FavoriteCard data={item} setId={setId} token={token} />;
        })}
      </div>
    </div>
  );
};

export default page;
