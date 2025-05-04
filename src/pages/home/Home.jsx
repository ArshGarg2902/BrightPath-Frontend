import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testinominals/Testimonials";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Home = () => {
  const navigate = useNavigate();
  const { courses } = CourseData();

  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Let's Learn Beyond The Limits</h1>
          <p>
            Unlock your potential with our all-in-one e-learning platform. <br />
            Whether you're looking to gain new skills, explore your passions, or
            advance your career, <br />
            our curated courses and expert instructors are here to guide you
            every step of the way. <br />
            Learn at your own pace, from anywhere, at any time.
          </p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>

      {/* 🎯 Featured Courses Section */}
      <div className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="course-container">
          {courses && courses.length > 0 ? (
            courses.slice(0, 3).map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p>No Courses Available</p>
          )}
        </div>
        <button onClick={() => navigate("/courses")} className="common-btn explore-btn">
          Explore All Courses
        </button>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
