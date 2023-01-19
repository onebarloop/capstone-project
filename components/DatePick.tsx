import React, { SetStateAction, Dispatch } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

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
}: DatePickProps): JSX.Element {
  const datum: Array<Date> = [];

  dates.forEach((date) => {
    datum.push(new Date(date));
  });

  function handleDate(date: Date): void {
    const dateString: string = date.toDateString();
    dates.includes(dateString)
      ? onSetDates!((prev) => prev.filter((item) => item !== dateString))
      : onSetDates!((prev) => [...prev, dateString]);
  }

  function handleAppointment(date: Date): void {
    const dateString: string = date.toDateString();
    dates.includes(dateString)
      ? alert(`Make an appointment for ${date} ?`)
      : alert('Date not available');
  }

  return (
    <StyledDatePicker>
      {inline === false ? (
        <DatePicker
          onChange={(date: Date) => handleDate(date)}
          shouldCloseOnSelect={false}
          highlightDates={datum}
          placeholderText='Add Dates'
          className={className}
          minDate={new Date()}
        />
      ) : (
        <DatePicker
          inline
          highlightDates={datum}
          onChange={(date: Date) => handleAppointment(date)}
          minDate={new Date()}
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
  .react-datepicker__day--disabled {
    color: #898888;
    background-color: black;
  }
`;
