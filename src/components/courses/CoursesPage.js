import React, { useState } from "react";

let initialCourse = {
  title: "",
};

const CoursesPage = (props) => {
  const [course, setCourse] = useState(initialCourse);

  function handleChange(event) {
    setCourse(() => {
      return { ...course, title: event.target.value };
    });
  }

  function handleSubmit(e) {
    alert(e);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2> Courses</h2>
      <h3>Add Course</h3>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={course.title}
      />
      <input type="submit" value="Save" />
    </form>
  );
};

export default CoursesPage;
