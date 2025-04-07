import { useState } from "react";
import dayjs from "dayjs";
import lang from "dayjs/locale/pt";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { holidays } from "@/app/calendario/holidays";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const today = dayjs().date();
    const currentMonth = currentDate.month() + 1;
    const isCurrentMonth = dayjs().month() === currentDate.month() && dayjs().year() === currentDate.year();

    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    const startOfMonth = currentDate.startOf("month");
    const daysInMonth = currentDate.daysInMonth();
    const firstDayOfWeek = startOfMonth.day();

    const previousMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
    const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDayOfWeek }, (_, i) => i);

    return (
        <div className="p-4 w-full mx-auto bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <Button size="icon" onClick={previousMonth}><ArrowLeft /></Button>
                <h2 className="text-lg font-semibold">{currentDate.locale(lang).format("MMMM YYYY")}</h2>
                <Button size="icon" onClick={nextMonth}><ArrowRight /></Button>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {weekDays.map((weekDay) => (
                    <div key={weekDay} className="text-center font-semibold">{weekDay}</div>
                ))}

                {emptyDays.map((_, i) => <div key={`empty-${i}`} />)}
                {days.map((day) => {
                    const isToday = isCurrentMonth && day === today;
                    const isHoliday = holidays[currentMonth]?.[day];

                    return (
                        <div
                            key={day}
                            className={`
                            p-2 text-left 
                            ${isToday ? "bg-neutral-400 text-white font-bold border border-neutral-500" : "bg-neutral-50 border"} 
                            rounded h-24
                        `}>
                            <span>{day}</span>

                            {isHoliday && (
                                <div className="flex items-center justify-center bg-blue-500 border border-blue-200 rounded-sm h-6 w-6">
                                    <span className="text-blue-50 text-lg font-bold">F</span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Calendar;