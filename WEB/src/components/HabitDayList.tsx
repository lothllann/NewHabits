import React, { useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { api } from "../lib/axios";

interface ListProps {
  hDate: Date;
}

interface HabitsInfo {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>;
  completedHabits: string[];
}

export const HabitDayList = ({ hDate }: ListProps) => {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  useEffect(() => {
    api
      .get("day", {
        params: {
          date: hDate.toISOString(),
        },
      })
      .then((response) => {
        setHabitsInfo(response.data);
      });
  }, []);

  return (
    <div>
      <div className="mt-6 flex flex-col gap-3">
        {habitsInfo?.possibleHabits.map((habit) => {
          return (
            <Checkbox.Root
              key={habit.id}
              checked={habitsInfo.completedHabits.includes(habit.id)}
              className="flex items-center gap-3 group"
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 
              group-data-[state=checked]:bg-green-500
              group-data-[state=checked]:border-green-500"
              >
                <Checkbox.CheckboxIndicator>
                  <Check size={20} className="text-white" />
                </Checkbox.CheckboxIndicator>
              </div>

              <span
                className="font-semibold text-xl text-white leading-tight
              group-data-[state=checked]:line-through
              group-data-[state=checked]:text-zinc-400"
              >
                {habit.title}
              </span>
            </Checkbox.Root>
          );
        })}
      </div>
    </div>
  );
};
