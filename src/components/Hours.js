import React from 'react';

const Hours = () => {
  // Get the current date
  const now = new Date();
  const dayOfWeek = now.getDay();

  // Define opening hours
  const hours = {
    weekday: { opening: '10:00 a.m.', closing: '4:00 p.m.' },
    weekend: { opening: '9:00 a.m.', closing: '8:00 p.m.' },
  };

  // Determine opening hours based on the day of the week
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday
  const schedule = isWeekday ? hours.weekday : hours.weekend;

  // Render the component
  return (
    <div>
      <h2>Opening Hours</h2>
      <p>
        {isWeekday ? 'Weekday (Monday to Friday)' : 'Weekend (Saturday and Sunday)'}
      </p>
      <p>Open from: {schedule.opening}</p>
      <p>Closes at: {schedule.closing}</p>
    </div>
  );
};

export default Hours;
