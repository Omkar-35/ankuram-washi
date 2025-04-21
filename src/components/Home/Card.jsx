import React from 'react';
import './Card.css'; // Add your styles here

const cardsData = [
  {
    title: "अशी मी मदनमंजिरी",
    description: "Our little talented Vth class girls performance on lavani.",
    image: "/photos/Student Dance.jpeg", // Replace with actual image paths
  },
  {
    title: "विठू माझा सावळा",
    description: "Our cute pre-primary students performing on marathi geet.",
    image: "/photos/annual day -02.jpeg", // Replace with actual image paths
  },
  {
    title: "TMKOC",
    description: "Our very talented senior students acted on the TMKOC script.",
    image: "/photos/annual day -01.jpeg", // Replace with actual image paths
  },
];

function Card() {
  return (
    <div className="card-section">
      <h2 className="section-title">Annual Day 2024-2025</h2>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img className="card-image" src={card.image} alt={`Card ${index}`} />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
