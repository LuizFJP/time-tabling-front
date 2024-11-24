
export default function GenerateSchedule() {
    return (
        <div className="w-full h-5/6 flex justify-center items-center gap-8">
            <article className={`bg-gray-200 rounded-xl w-[45%] h-full flex items-center flex-col`}>
                <div className="bg-red-900 w-full h-10 rounded-tr-xl rounded-tl-xl">

                </div>
                <h1 className="font-bold text-slate-950 mt-2 text-xl">Professores</h1>
            </article>
            <article className={`bg-gray-200 rounded-xl w-[45%] h-full flex items-center flex-col`}>
                <div className="bg-red-900 w-full h-10 rounded-tr-xl rounded-tl-xl">

                </div>
                <h1 className="font-bold text-slate-950 mt-2 text-xl">Disciplinas</h1>
            </article>
        </div>
    )
}