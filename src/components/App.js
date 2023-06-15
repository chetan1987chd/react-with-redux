import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/Homepage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";

export default function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
    </div>
  );
}
