"use client";
import {useState} from "react";
import {UnavailableWeekDays, WeekDaysEnum} from "@/app/_model/WeekDaysEnum";

interface AvailableDaysProps {
    getAvailableDays: (unavailableDays: UnavailableWeekDays) => void;
}

export default function AvailableDays({getAvailableDays}: AvailableDaysProps) {
    const [days, setDays] = useState<UnavailableWeekDays>({
        [WeekDaysEnum.SEGUNDA]: false,
        [WeekDaysEnum.TERCA]: false,
        [WeekDaysEnum.QUARTA]: false,
        [WeekDaysEnum.QUINTA]: false,
        [WeekDaysEnum.SEXTA]: false,
        [WeekDaysEnum.SABADO]: false,
    });

    const handleDays = (day: WeekDaysEnum) => {
        setDays({...days, [day]: !days[day]});
        getAvailableDays(days);
    }

    return (
        <div className="w-full">
            <div className="text-slate-950 text-sm flex flex-col h-12 mx-auto mt-0 font-bold m-0 w-3/6">
                <div className="mb-2">
                    Dias da Semana Indisponíveis
                </div>
                <div className="flex items-center justify-between w-2/6 gap-3">
                    <div
                        className={`flex items-center justify-center w-5 h-5 ${days[WeekDaysEnum.SEGUNDA] ? "bg-red-800" : "bg-gray-500"} text-white rounded-lg`}>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDays(WeekDaysEnum.SEGUNDA)
                        }} className="cursor-pointer">
                            S
                        </button>
                    </div>
                    <div
                        className={`flex items-center justify-center w-10 h-10 ${days[WeekDaysEnum.TERCA] ? "bg-red-800" : "bg-gray-500"} text-white rounded-lg`}>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDays(WeekDaysEnum.TERCA)
                        }} className="cursor-pointer">
                            T
                        </button>
                    </div>
                    <div
                        className={`flex items-center justify-center w-10 h-10 ${days[WeekDaysEnum.QUARTA] ? "bg-red-800" : "bg-gray-500"} text-white rounded-lg`}>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDays(WeekDaysEnum.QUARTA)
                        }} className="cursor-pointer">
                            Q
                        </button>
                    </div>
                    <div
                        className={`flex items-center justify-center w-10 h-10 ${days[WeekDaysEnum.QUINTA] ? "bg-red-800" : "bg-gray-500"} text-white rounded-lg`}>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDays(WeekDaysEnum.QUINTA)
                        }} className="cursor-pointer">
                            Q
                        </button>
                    </div>
                    <div
                        className={`flex items-center justify-center w-10 h-10 ${days[WeekDaysEnum.SEXTA] ? "bg-red-800" : "bg-gray-500"} text-white rounded-lg`}>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDays(WeekDaysEnum.SEXTA)
                        }} className="cursor-pointer">
                            S
                        </button>
                    </div>
                    <div
                        className={`flex items-center justify-center w-10 h-10 ${days[WeekDaysEnum.SABADO] ? "bg-red-800" : "bg-gray-500"} text-white rounded-lg`}>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDays(WeekDaysEnum.SABADO)
                        }} className="cursor-pointer">
                            S
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}