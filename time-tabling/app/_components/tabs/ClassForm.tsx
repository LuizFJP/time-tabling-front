import AvailableDays from "@/app/_components/AvailableDay";

export default function ClassForm() {
    return (
        <form className="flex mx-auto my-0 flex-1 w-full flex-col gap-10 items-center justify-items-start">
            <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                Nome
                <input type="email"
                       className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                />
            </label>
            <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                Código
                <input type="text"
                       className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                />
            </label>
            <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                Fase
                <select
                    className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                >
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
                    <option value="7">8</option>
                </select>
            </label>
            <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                Créditos
                <select
                    className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                >
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                </select>
            </label>
            <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                Professor
                <select
                    className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                ></select>
            </label>
            <div className="w-4/6 flex h-full">
                <AvailableDays getAvailableDays={() => {}}/>
                <AvailableDays getAvailableDays={() => {}}/>
            </div>
            <button
                className="bg-blue-500 text-white text-base font-bold rounded-lg  p-3 mt-2 w-1/6 hover:bg-blue-700"
                type="submit">Cadastrar
            </button>
        </form>
    );
}