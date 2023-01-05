import React, { SetStateAction, Dispatch } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
//import "react-datepicker/dist/react-datepicker-cssmodules.css";

type DatePickProps = {
  dates: string[];
  onSetDates: Dispatch<SetStateAction<string[]>>;
  className?: string;
};

export default function DatePick({
  dates,
  onSetDates,
  className,
}: DatePickProps) {
  const datum: Array<Date> = [];

  dates.forEach((date) => {
    datum.push(new Date(date));
  });

  function handleDate(date: Date): void {
    const d: string = date.toDateString();
    dates.includes(d)
      ? onSetDates((prev) => prev.filter((item) => item !== d))
      : onSetDates((prev) => [...prev, d]);
  }

  return (
    <DatePicker
      onChange={(date: Date) => handleDate(date)}
      shouldCloseOnSelect={false}
      highlightDates={datum}
      placeholderText="Please select some dates"
      className={className}
    />
  );
}
