import dayjs from "dayjs";
import React, { useState } from "react";
import { api } from "../lib/axios";
import { generateDatesFromYearBegining } from "../utils/generate-dates-from-year-begining";
import HabitDay from "./HabitDay";

const week = ["D", "S", "T", "Q", "Q", "S", "S"];
const sumaryDates = generateDatesFromYearBegining();
const MinsumaryDatesSize = 18 * 7;
const amountOfDaysToFill = MinsumaryDatesSize - sumaryDates.length;

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

const SumaryTable = () => {
  const [summary, setSummary] = useState<Summary>([]);

  React.useEffect(() => {
    api.get("summary").then((r) => {
      setSummary(r.data);
    });
  }, []);

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {week.map((day, i) => {
          return (
            <div
              key={`${day}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length > 0 && sumaryDates.map((date) => {
          const dayInSummary = summary.find((day) => {
            return dayjs(date).isSame(day.date, "day");
          });
          return (
            <HabitDay
              date={date}
              amount={dayInSummary?.amount}
              defaultCompleted={dayInSummary?.completed}
              key={date.toString()}
            />
          );
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
};

export default SumaryTable;
