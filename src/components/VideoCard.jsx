import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

const VideoCard = ({post,video, creator}) => {
  return (
    <Link to="/video" state={{ video:post}}>


      <div className="flex flex-col mb-8">
        <div className="relative h-64 md:h-48 lg:h-56 xl:h-64 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-contain"
            src={video?.thumbnail}

          />

          
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover" src={creator?.pic}/>

            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">{video?.title}</span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              
              {creator?.handle}
              
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(post?.reaction?.count,2)} views`}</span>
              <span className="flex text-[20px] loading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">.</span>
              <span>{`${abbreviateNumber(post?.comment?.count,2)} comment`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
