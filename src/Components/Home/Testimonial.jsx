import React from "react";
import Carousel from "react-elastic-carousel";
import { FaStar } from "react-icons/fa";
import "./Testimonial.css"
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Piter Bowman",
      position: "Business CEO & Co Founder",
      message:
        "THANK YOU FOR DINNER LAST NIGHT. IT WAS AMAZING!! I HAVE TO SAY IT'S THE BEST MEAL I HAVE HAD IN QUITE SOME TIME. WILL DEFINITELY BE SEEING MORE NEXT YEAR.",
      rating: 5,
    },
    {
      id: 2,
      name: "Anna Smith",
      position: "Marketing Manager",
      message:
        "The service was exceptional, and the food was even better! Highly recommend it to everyone.",
      rating: 4,
    },
    {
      id: 3,
      name: "Anna Smith",
      position: "Marketing Manager",
      message:
        "The service was exceptional, and the food was even better! Highly recommend it to everyone.",
      rating: 4,
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 }, 
    { width: 768, itemsToShow: 1 }, 
    { width: 1200, itemsToShow: 1 }, 
  ];

  return (
    <>
      <div>
        <section className="Testimonial-section p-5">
          <div className="container p-2">
            <Carousel breakPoints={breakPoints}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.position}</p>
                  <h3>{testimonial.message}</h3>
                  <div className="tp-stars" style={{ color: "#ffcf55" }}>
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} style={{ color: "#ffcf55" }} />
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
