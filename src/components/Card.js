import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function favBtnHandler() {
    if (likedCourses.includes(course.id)) {
      //already liked courses
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      //not liked
      //include it in liked courses
      if (likedCourses.length === 0) setLikedCourses([course.id]);
      else setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img className="" src={course.image.url} alt="" />

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute
        right-2 -bottom-3 grid place-items-center"
        >
          <button onClick={favBtnHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white opacity-85">
          {course.description.length > 100
            ? course.description.substr(0, 100) + " ...."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
