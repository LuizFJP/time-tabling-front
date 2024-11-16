import Header from "@/app/_components/Header";

export default function Home(){
    return (
        <main className="w-full h-screen">
            <Header/>
            <section className="bg-white w-9/12 h-4/5 mx-auto flex my-9 rounded-2xl">
               <nav className="bg-blue-500 text-white w-full h-[64px] rounded p-4 flex ">
                   <ul className="flex items-center justify-between w-full h-full text-2xl">
                       <li className="hover:bg-blue-800 p-2 rounded hover:cursor-pointer">Cadastrar Professor</li>
                       <li className="hover:bg-blue-800 p-2 rounded hover:cursor-pointer">Cadastrar Disciplna</li>
                       <li className="hover:bg-blue-800 p-2 rounded hover:cursor-pointer">Gerar Cronograma</li>
                   </ul>
               </nav>
                <article>
                    <form>
                        <label>
                            <input type="email"
                                   className="mt-1 p-2 rounded-lg text-base border-slate-950 border-2 focus:border-red-800"
                                   />
                            Nome
                        </label>
                    </form>
                </article>
            </section>
        </main>
    );
}