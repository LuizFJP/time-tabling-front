import AvailableDays from "@/app/_components/AvailableDay";

export default function ProfessorForm() {
    return (
        <form className="flex mx-auto my-0 flex-1 w-full flex-col gap-10 items-center justify-items-start">
            <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                Nome
                <input type="email"
                       className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                />
            </label>
            <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                Matrícula
                <input type="text"
                       className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                />
            </label>
            <AvailableDays getAvailableDays={() => {
            }}/>
            <button
                className="bg-blue-500 text-white text-base font-bold rounded-lg  p-3 mt-2 w-1/6 hover:bg-blue-700"
                type="submit">Cadastrar
            </button>
        </form>
    );
}