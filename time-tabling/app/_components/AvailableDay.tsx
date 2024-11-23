"use client";
import {useState} from "react";

enum WeekDays {
    SEGUNDA = "segunda",
    TERCA = "terca",
    QUARTA = "quarta",
    QUINTA = "quinta",
    SEXTA = "sexta",
    SABADO = "sabado",
}

type AvailableWeekDays = {
    [WeekDays.SEGUNDA]: boolean;
    [WeekDays.TERCA]: boolean;
    [WeekDays.QUARTA]: boolean;
    [WeekDays.QUINTA]: boolean;
    [WeekDays.SEXTA]: boolean;
    [WeekDays.SABADO]: boolean;
};

interface AvailableDaysProps {
    getAvailableDays: (days: AvailableWeekDays) => void;
}

export default function AvailableDays({getAvailableDays}: AvailableDaysProps) {
    const [days, setDays] = useState<AvailableWeekDays>({
        "segunda": true,
        "terca": true,
        "quarta": true,
        "quinta": true,
        "sexta": true,
        "sabado": true,
    });

    const handleDays = (day: WeekDays) => {
        setDays({...days, [day]: !days[day]});
        getAvailableDays(days);
    }

    return (
        <div className="w-full">
            <label className="text-slate-950 text-sm flex flex-col h-12 mx-auto mt-0 font-bold m-0 w-3/6">
                Dias da Semana Disponíveis
                <div className="flex items-center justify-between w-2/6 gap-3">
                    {Object.entries(days).map(([day, isAvailable]) => (
                        <div key={day} className={`mt-1 py-2 px-3 flex items-center justify-center cursor-pointer 
                            rounded-md text-white font-semibold transition ${isAvailable ? "bg-green-900" : "bg-red-800"}`}
                             onClick={() => handleDays(day as WeekDays)}>
                            {day.charAt(0).toUpperCase()}
                        </div>))}
                </div>
            </label>
        </div>
    )
}