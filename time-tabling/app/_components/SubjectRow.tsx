import Image from "next/image";
import {Subject} from "@/app/_model/Class";

interface SubjectRowProps {
    subject: Subject;
}

export default function SubjectRow({subject}: SubjectRowProps) {
    const daysList = ['S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <div key={subject.code}
             className="flex justify-between items-center gap-4 text-slate-950 text-sm w-full">
            <div>
                <span className={"font-bold"}>{subject.name}</span>
            </div>
            <div className="flex gap-2 justify-center items-center">
                {daysList.map((day, index) => (
                    <span key={index}
                          className={`text-sm text-white w-7 h-6 rounded text-center flex items-center justify-center ${subject.unavailable_days.includes(index) ? 'bg-red-800' : 'bg-gray-500'}`}>{day}</span>
                ))}
            </div>
            <div className="flex gap-2 justify-center items-center">
                {daysList.map((day, index) => (
                    <span key={index}
                          className={`text-sm text-white w-7 h-6 rounded text-center flex items-center justify-center ${subject.required_days.includes(index) ? 'bg-green-800' : 'bg-gray-500'}`}>{day}</span>
                ))}
            </div>
            <div>
                <button className="text-white text-base font-bold rounded-lg  p-3 hover:bg-gray-50">
                    <Image src={'/icons/pencil-solid.svg'} width={12} height={12} alt={'edit'}/>
                </button>
                <button className="text-white text-base font-bold rounded-lg  p-3 hover:bg-gray-50">
                    <Image src={'/icons/trash-solid.svg'} width={12} height={12} alt={'delete'}/>
                </button>
            </div>
        </div>
    )
        ;
}