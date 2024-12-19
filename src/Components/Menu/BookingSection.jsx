import React, { useState } from "react";
import mainBg from "../../Assets/images/main-bg.jpg";
import bookingShape from "../../Assets/images/booking-shape.png";
import { FaPhone, FaAngleDown } from "react-icons/fa";
import "./BookingSection.css";

const BookingSection = () => {
  const peoples = [
    { people: "1 People" },
    { people: "3 People" },
    { people: "4 People" },
  ];

  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState("1 People");
  const [value, setValue] = useState({
    noOfPeoples: "",
    phoneNumber: "",
    bookingDate: "",
  });

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleSelect = (people) => {
    setSelectedPeople(people);
    setValue({ ...value, noOfPeoples: people });
    setIsListOpen(false);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Values:", value);
    setValue({
      noOfPeoples: "",
      phoneNumber: "",
      bookingDate: "",
    });
    setSelectedPeople("1 People");
  };

  return (
    <section
      className="booking-section bg-cover"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="container">
        <div className="booking-wrapper">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6">
              <div className="booking-content" style={{ marginTop: "60px" }}>
                <div className="section-title2">
                  <span className="content-p">crispy, every bite taste</span>
                  <h2 style={{ color: "var(--white)", fontSize: "60px" }}>
                    Need booking? <br /> reserve your table?
                  </h2>
                </div>
                <div className="d-flex mt-2" style={{ gap: "20px" }}>
                  <div className="icon mt-2">
                    <FaPhone style={{ rotate: "90deg" }} />
                  </div>
                  <div className="content ms-3">
                    <h5>24/7 Support center</h5>
                    <h3>
                      <a
                        href="tel:+1718-904-4450"
                        className="text-decoration-none"
                        style={{ color: " var(--accent-color)" }}
                      >
                        +1718-904-4450
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="booking-contact bg-cover"
                style={{
                  backgroundImage: `url(${bookingShape})`,
                  backgroundColor: "var(--accent-color)",
                }}
              >
                <h4>create a reservation</h4>
                <form className="booking-items" onSubmit={handleSubmit}>
                  <div className="form-clt">
                    <div
                      className="nice-select no-of-person"
                      onClick={toggleList}
                    >
                      <span className="current">{selectedPeople}</span>
                      <FaAngleDown style={{ color: "white" }} />
                    </div>
                    {isListOpen && (
                      <ul className="menu-list">
                        {peoples.map((person, index) => (
                          <li
                            key={index}
                            className="option"
                            onClick={() => handleSelect(person.people)}
                          >
                            {person.people}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="form-clt position-relative">
                    <input
                      type="tel"
                      id="number"
                      placeholder="phone number"
                      name="phoneNumber"
                      required
                      onChange={handleChange}
                      value={value.phoneNumber}
                    />
                    <div className="icon">
                      <FaPhone />
                    </div>
                  </div>
                  <div className="form-clt">
                    <input
                      type="date"
                      id="date"
                      name="bookingDate"
                      onChange={handleChange}
                      value={value.bookingDate}
                    />
                  </div>
                  <div className="form-clt">
                    <button
                      type="submit"
                      className="theme-btn w-100 border-0"
                    >
                      Booking now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
