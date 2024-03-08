import React, { useState } from "react";
import Card from "./Card";

// const Cards = ({courses}) => { *****OR*******
const Cards = (props) => {
  let courses = props.courses;

  const [likedCourses, setLikedCourses] = useState([]);

  //returns all courses
  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card key={course.id} course={course} 
          likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        );
      })}
    </div>
  );
};

export default Cards;
