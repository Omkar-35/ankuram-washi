import React, { useState, useEffect } from 'react';
import './Staff.css';

const faculty = [
  {
    name: "Dr. Vinod Pawar",
    title: "Founder",
    image: "Photos/director.jpeg",
    bio: "Passionate about shaping young minds with over 20 years of educational experience.",
  },
  {
    name: "Mrs. Rohini Pawar",
    title: "President",
    image: "Photos/Screenshot (37).png",
    bio: "Believes in making numbers fun and relatable to everyday life.",
  },
  {
    name: "Mr. Veeraj Pawar",
    title: "Principal",
    image: "Photos/Screenshot (37).png",
    bio: "Inspires curiosity and critical thinking in young learners.",
  },
  {
    name: "Mr. Shivratna Pawar",
    title: "Science Faculty",
    image: "Photos/director.jpeg", // duplicate image for example
    bio: "Helps students fall in love with numbers and problem solving.",
  }
];

function Staff() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 2) % faculty.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visibleFaculty = [
    faculty[index],
    faculty[(index + 1) % faculty.length]
  ];

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Meet Our Educators</h2>
      <div className="card-wrapper">
        {visibleFaculty.map((member, idx) => (
          <div key={idx} className="carousel-card">
            <img src={member.image} alt={member.name} className="carousel-image" />
            <div className="carousel-info">
              <h3>{member.name}</h3>
              <p className="designation">{member.title}</p>
              <p className="bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;
