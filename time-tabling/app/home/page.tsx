"use client"
import Header from "@/app/_components/Header";
import AvailableDays from "@/app/_components/AvailableDay";
import {useState} from "react";
import ProfessorForm from "@/app/_components/tabs/ProfessorForm";
import SubjectForm from "@/app/_components/tabs/SubjectForm";
import GenerateSchedule from "@/app/_components/tabs/GenerateSchedule";

enum SelectedTab {
    PROFESSOR = 0,
    DISCIPLINA = 1,
    CRONOGRAMA = 2,
}

export default function Home() {

    const [selectedTab, setSelectedTab] = useState<SelectedTab>(SelectedTab.PROFESSOR);

    return (
        <main className="w-full h-screen">
            <Header/>
            <section className="bg-white w-11/12 h-4/5 mx-auto flex flex-col my-9 rounded-2xl">
                <div>
                    <nav className="bg-blue-500 text-white w-full h-[64px] rounded p-4 flex ">
                        <ul className="flex items-center justify-between w-full h-full text-2xl">
                            <li className={`hover:bg-blue-800 p-2 rounded hover:cursor-pointer ${selectedTab === SelectedTab.PROFESSOR && "bg-blue-800"}`}>
                                <button onClick={() => {
                                    setSelectedTab(SelectedTab.PROFESSOR);
                                }}>Cadastrar Professor
                                </button>
                            </li>
                            <li className={`hover:bg-blue-800 p-2 rounded hover:cursor-pointer ${selectedTab === SelectedTab.DISCIPLINA && "bg-blue-800"}`}>
                                <button onClick={() => {
                                    setSelectedTab(SelectedTab.DISCIPLINA);
                                }}>Cadastrar Disciplina
                                </button>
                            </li>
                            <li className={`hover:bg-blue-800 p-2 rounded hover:cursor-pointer ${selectedTab === SelectedTab.CRONOGRAMA && "bg-blue-800"}`}>
                                    <button onClick={() => {
                                        setSelectedTab(SelectedTab.CRONOGRAMA);
                                    }}>Gerar Cronograma
                                    </button>
                                </li>
                        </ul>
                    </nav>
                </div>
                <article className="w-full h-full mt-8">
                    {selectedTab === SelectedTab.PROFESSOR && <ProfessorForm/>}
                    {selectedTab === SelectedTab.DISCIPLINA && <SubjectForm/>}
                    {selectedTab === SelectedTab.CRONOGRAMA && <GenerateSchedule/>}
                </article>
            </section>
        </main>
    );
}