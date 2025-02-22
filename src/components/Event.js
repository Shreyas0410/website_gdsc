import React, { useEffect, useState } from 'react';

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    import("../events.json")
      .then((response) => {
        setEvents(response.default.slice(-4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="font-poppins text-5xl font-semibold leading-14 tracking-tight text-black mb-8 mt-20 ml-20">Upcoming Events</h1>
      <h3 className="font-poppins text-2xl font-medium leading-7 text-justify text-black opacity-60 mb-6 ml-20">Check out what's new</h3>
      <div className='flex flex-col flex-1 ml-20 mr-20'>
        {events.map((event, index) => (
          <div
            className={`${
              index === 0 ? 'bg-green-500' :
                index === 1 ? 'bg-yellow-500' :
                  index === 2 ? 'bg-blue-500' :
                    index === 3 ? 'bg-red-500' :
                      'bg-gray-200'
            } flex flex-col md:flex-row mb-20`}
            style={{
              borderRadius: '30px',
            }}
            key={index}
          >
            <div
              className='flex flex-col flex-1 hidden md:flex'
              style={{
                background: 'white',
                padding: '20px',
              }}
            >
              <p style={{ fontFamily: 'Poppins', fontSize: '70px', fontWeight: '500', lineHeight: '105px', letterSpacing: '0em', textAlign: 'justified', color: '#00000099', padding: '0px', margin: '0px' }}>{`${event.date} `}</p>
              <p style={{ fontFamily: 'Poppins', fontSize: '30px', fontWeight: '500', lineHeight: '45px', letterSpacing: '0em', textAlign: 'justified', color: '#00000099', padding: '0px', margin: '0px', alignSelf: 'center' }}>{`${event.month}`}</p>
            </div>
            <img
              src={event.img}
              className="mb-4 md:mb-0 md:mr-4"
              style={{ width: '100%', height: '20rem', objectFit: 'fill', borderRadius: '10px', background: 'white' }}
              alt="Event"
            />
            <div className="flex flex-col" style={{ width: '100%' }}>
              <h3 className="text-white text-sm font-bold ml-2 mb-2 mt-4">{event.type}</h3>
              <h1 className="text-3xl text-white font-bold ml-2 mb-2 mt-2">{event.title}</h1>
              <p className="text-base text-white ml-2 mb-2 mt-4">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
