import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({ course }) => {
  return (
    <div className="w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img className="" src={course.image.url} alt="" />

        <div>
          <button>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
