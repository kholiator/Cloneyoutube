import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  // const { loading, searchResults, currentPage, setCurrentPage } = useContext(Context);


  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);


// 
  // const goToNextPage = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

  // const goToPreviousPage = () => {
  //   setCurrentPage((prevPage) => prevPage - 1);
  // };
// 


  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
                
              );
            })}
{/* {
   !loading &&
    searchResults.map((item) => {
      if(item === 'NULL') return false;
      return (
        // <VideoCard key={item?.video?.videoId} video={item?.video} />
        <VideoCard key={item?.postId} video={item?.submission} />
        
      );
    })
} */}

        </div>
        {/* <div className="flex flex-row justify-center"> 
        <button className="text-sm font-semibold text-white hover:cursor-pointer mr-5" onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button className="text-sm font-semibold text-white hover:cursor-pointer ml-5" onClick={goToNextPage}>Next Page</button>
      </div> */}
      </div>
    </div>
  );
};

export default Feed;
