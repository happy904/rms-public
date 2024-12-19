import React from 'react';
import { useApiData } from '../Context';

const ContactInfo = () => {
  const information = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-map-pin-pin"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M12.783 21.326a2 2 0 0 1 -2.196 -.426l-4.244 -4.243a8 8 0 1 1 13.657 -5.62" />
          <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
          <path d="M19 18v.01" />
        </svg>
      ),
      title: 'Address Line',
      info: 'Bowery St, New York, 37 USA NY 10013, USA',
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-phone"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>
      ),
      title: 'Phone Number',
      info: '+1255 - 568 - 6523 4374-221 +1255 - 568 - 6523',
      style: { backgroundColor: '#00813d', color: 'white' },
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-mail"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
      ),
      title: 'Mail Address',
      info: 'email@example.com info@yourdomain.com',
    },
  ];

  return (
    <div className="container">
      <div className="row main-adress">
        {information.map((info, key) => (
          <div key={key} className="col-md-4">
            <div className="address-cards" style={info.style}>
              {info.svg}
              <h1>{info.title}</h1>
              <p>{info.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
