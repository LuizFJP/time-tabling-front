"use client"
import Header from "@/app/_components/Header";
import AvailableDays from "@/app/_components/AvailableDay";

export default function Home() {
    return (
        <main className="w-full h-screen">
            <Header/>
            <section className="bg-white w-9/12 h-4/5 mx-auto flex flex-col my-9 rounded-2xl">
                <div>
                    <nav className="bg-blue-500 text-white w-full h-[64px] rounded p-4 flex ">
                        <ul className="flex items-center justify-between w-full h-full text-2xl">
                            <li className="hover:bg-blue-800 p-2 rounded hover:cursor-pointer">Cadastrar Professor</li>
                            <li className="hover:bg-blue-800 p-2 rounded hover:cursor-pointer">Cadastrar Disciplna</li>
                            <li className="hover:bg-blue-800 p-2 rounded hover:cursor-pointer">Gerar Cronograma</li>
                        </ul>
                    </nav>
                </div>
                <article className="w-full h-full mt-32">
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
                        <label className="text-slate-950 text-sm flex flex-col h-12 font-bold m-0 w-3/6">
                            Disciplinas
                            <select
                                className="p-2 rounded-lg text-base border-slate-500 border-2 focus:border-red-800"
                            ></select>
                        </label>
                        <AvailableDays getAvailableDays={() => {
                        }}/>
                        <button
                            className="bg-blue-500 text-white text-base font-bold rounded-lg  p-3 mt-2 w-1/6 hover:bg-blue-700"
                            type="submit">Cadastrar
                        </button>
                    </form>
                </article>
            </section>
        </main>
    );
}