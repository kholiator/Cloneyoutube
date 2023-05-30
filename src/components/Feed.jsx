import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {

  const { loading, searchResults, currentPage, setCurrentPage } = useContext(Context);


  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);



  const goToNextPage = () => {
    setCurrentPage(currentPage+1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage-1);
  };



  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
  <LeftNav />
  <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      {!loading &&
        searchResults.map((item) => {
          if (item === 'NULL') return false;
          return (
            <VideoCard key={item?.postId} video={item?.submission} creator={item?.creator} post={item} />
          );
        })}
    </div>
    <div className="flex flex-row justify-center mt-5">
      <button
        className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed mr-2"
        onClick={goToPreviousPage}
        disabled={currentPage === 0}
      >
        Previous Page
      </button>
      <button
        className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md ml-2"
        onClick={goToNextPage}
      >
        Next Page
      </button>
    </div>
  </div>
</div>

  );
};

export default Feed;
