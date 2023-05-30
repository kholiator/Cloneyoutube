import React, { useEffect} from "react";
import { useLocation} from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoDetails = () => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
  }, []);


  return (
    <div className="justify-center bg-black">
  <div className="w-full max-w-[1280px] flex flex-col">
    <div className="flex flex-col px-4 py-3 lg:py-6 overflow-y-auto">
      <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
        <video className="w-full h-full bg-black" autoPlay controls>
          <source src={location.state.video.submission.mediaUrl} type="video/mp4" />
        </video>
      </div>
      <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
        {location.state.video.submission.title}
      </div>
      <div className="flex justify-between flex-col md:flex-row mt-4">
        <div className="flex">
          <div className="flex items-start">
            <div className="flex h-11 w-11 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover" src={location.state.video.creator.pic} />
            </div>
          </div>
          <div className="flex flex-col ml-3">
            <div className="text-white text-md font-semibold flex items-center">
              {location.state.video.creator.handle}
            </div>
          </div>
        </div>
        <div className="flex text-white mt-4 md:mt-0">
          <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-5">
            <AiOutlineLike className="text-sm text-white mr-2" />
            {`${abbreviateNumber(location.state.video.reaction.count, 2)} Likes`}

            <FaRegCommentAlt className="text-sm text-white mr-2 ml-5" />
            {`${abbreviateNumber(location.state.video.comment.count, 2)} Comments`}
          </div>
        </div>
      </div>
      <div className="text-sm text-white mt-2 font-semibold">Description</div>
      <div className="text-sm text-white">{location.state.video.submission.description}</div>
    </div>
  </div>
</div>

  );
};

export default VideoDetails;
