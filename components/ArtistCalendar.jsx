import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

export default function ArtistCalendar() {
  const [value, onChange] = useState(new Date());

  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates((prev) => [...prev, value]);
  }, [value]);

  console.log(dates);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
