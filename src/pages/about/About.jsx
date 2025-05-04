import React from "react";
import "./about.css";

const features = [
  {
    title: "Trusted Instructors",
    description: "Learn from experienced, certified professionals across various fields.",
    icon: "🧑‍🏫",
  },
  {
    title: "Audio Lessons",
    description: "Access audio lessons on the go, perfect for mobile learning.",
    icon: "🎧",
  },
  {
    title: "Certificates",
    description: "Receive a certificate of completion for every course you finish.",
    icon: "🎓",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your course progress and stay motivated with progress reports.",
    icon: "📊",
  },
  {
    title: "Flexible Learning",
    description: "Study anytime, anywhere — at your own pace and convenience.",
    icon: "🕒",
  },
];

const About = () => {
  return (
    <div className="about">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
