import React, { SetStateAction, Dispatch } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// CSS Modules, react-datepicker-cssmodules.css
//import "react-datepicker/dist/react-datepicker-cssmodules.css";

type DatePickProps = {
  dates: string[];
  onSetDates?: Dispatch<SetStateAction<string[]>>;
  className?: string;
  inline: boolean;
};

export default function DatePick({
  dates,
  onSetDates,
  className,
  inline,
}: DatePickProps) {
  const datum: Array<Date> = [];

  dates.forEach((date) => {
    datum.push(new Date(date));
  });

  function handleDate(date: Date): void {
    const d: string = date.toDateString();
    dates.includes(d)
      ? onSetDates!((prev) => prev.filter((item) => item !== d))
      : onSetDates!((prev) => [...prev, d]);
  }

  return (
    <StyledDatePicker>
      {inline === false ? (
        <DatePicker
          onChange={(date: Date) => handleDate(date)}
          shouldCloseOnSelect={false}
          highlightDates={datum}
          placeholderText="Add Dates"
          className={className}
        />
      ) : (
        <DatePicker
          inline
          highlightDates={datum}
          onChange={(date) => console.log(date)}
        />
      )}
    </StyledDatePicker>
  );
}

const StyledDatePicker = styled.div`
  .react-datepicker {
    border: 2px solid #848484;
  }
  .react-datepicker * {
    background-color: black;
    color: rgba(217, 217, 217, 1);
    font-family: Roboto;
  }
  .react-datepicker__day--highlighted {
    background-color: #d93378;
  }
`;
