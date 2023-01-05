import { useState } from "react";
import DatePicker from "react-multi-date-picker";

export default function DatePick() {
  const today = new Date();
  const tomorrow = new Date();

  const [values, setValues] = useState([today, tomorrow]);
  console.log("STOP");
  values.map((value) => console.log(value.month));

  return <DatePicker multiple value={values} onChange={setValues} />;
}
