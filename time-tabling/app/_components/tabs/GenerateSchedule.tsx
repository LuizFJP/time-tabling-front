import {Professor} from "@/app/_model/Professor";
import ProfessorRow from "@/app/_components/ProfessorRow";
import SubjectRow from "@/app/_components/SubjectRow";

export default function GenerateSchedule() {
    const professorList: Professor[] =
        [
            {
                name: 'Adilson Valhdick',
                registration: '0001',
                unavailable_days: [0, 1, 3],
                preferred_days: [0, 1]
            },
            {
                name: 'Marcelo de Souza',
                registration: '0002',
                unavailable_days: [3, 4, 5],
                preferred_days: [0, 1, 2]
            }
        ]
    const subjectList = [
        {
            name: 'Matemática',
            code: 'MAT001',
            semester: '1',
            weight: 2,
            teacher: professorList[0],
            unavailable_days: [0, 1, 3],
            required_days: [0, 1]
        },
        {
            name: 'Português',
            code: 'POR001',
            semester: '1',
            weight: 2,
            teacher: professorList[1],
            unavailable_days: [3, 4, 5],
            required_days: [0, 1, 2]
        }
    ]
    return (
        <div className="w-full h-5/6 flex flex-col justify-center items-center gap-8 px-2">
            <div className="w-full h-full flex justify-center items-center gap-8 px-2">
                <article className={`bg-gray-200 rounded-xl w-[50%] h-full flex items-center flex-col`}>
                    <div className="bg-red-900 w-full h-10 rounded-tr-xl rounded-tl-xl">

                    </div>
                    <h1 className="font-bold text-slate-950 mt-2 text-xl">Professores</h1>
                    <div className={"w-full p-2 overflow-y-scroll"}>
                        <div className="text-slate-950 text-sm flex justify-between font-bold">
                            <span>Nome</span>
                            <span>Dias Indisponíveis</span>
                            <span>Dias Preferidos</span>
                            <span>Editar/Excluir</span>
                        </div>
                        <div className="w-full flex flex-col gap-4 mt-2">
                            {professorList.map((professor) =>
                                <ProfessorRow key={professor.registration} professor={professor}/>
                            )}
                        </div>
                    </div>
                </article>
                <article className={`bg-gray-200 rounded-xl w-[50%] h-full flex items-center flex-col`}>
                    <div className="bg-red-900 w-full h-10 rounded-tr-xl rounded-tl-xl">
                    </div>
                    <h1 className="font-bold text-slate-950 mt-2 text-xl">Disciplinas</h1>
                    <div className={"w-full p-2 overflow-y-scroll"}>
                        <div className="text-slate-950 text-sm flex justify-between font-bold">
                            <span>Nome</span>
                            <span>Dias Indisponíveis</span>
                            <span>Dias Preferidos</span>
                            <span>Editar/Excluir</span>
                        </div>
                        <div className="w-full flex flex-col gap-4 mt-2">
                            {subjectList.map((subject) =>
                                <SubjectRow key={subject.code} subject={subject}/>
                            )}
                        </div>
                    </div>
                </article>
            </div>
            <button
                className="bg-blue-500 text-white text-base font-bold rounded-lg  p-3 mt-2 w-1/6 hover:bg-blue-700"
                type="submit">Gerar Cronograma
            </button>
        </div>
    )
}