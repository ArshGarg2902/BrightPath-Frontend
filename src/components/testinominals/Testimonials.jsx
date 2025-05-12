import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Jagdish kumar",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://i.pinimg.com/1200x/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        
        "https://i.pinimg.com/originals/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg",
    },
    {
      id: 3,
      name: "Avinash Gupta",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://i.pinimg.com/originals/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg",
    },
    {
      id: 4,
      name: "Sneha bansal",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
     
        "https://i.pinimg.com/736x/56/7a/d2/567ad26c22b991cb9f52b999f70b855d.jpg",
    },
  ];
  return (
    <section className="testimonials">
  <h2>What our students say</h2>
  <div className="testimonials-cards">
    {testimonialsData.map((e) => (
      <div className="testimonial-card" key={e.id}>
        <div className="student-image">
          <img src={e.image} alt={`${e.name}'s profile`} />
        </div>
        <p className="message">{e.message}</p>
        <div className="info">
          <p className="name">{e.name}</p>
          <p className="position">{e.position}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Testimonials;