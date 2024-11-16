"use client";
import Link from "next/link";
import {ChangeEvent, useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <section className="bg-white rounded-2xl mx-auto my-24 w-2/6 p-4 h-3/6 flex  flex-col items-center relative">
            <div className="flex items-center justify-between w-10/12 absolute -top-6 ">
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
                <div className="w-[20px] h-[52px] bg-red-800 rounded-2xl">

                </div>
            </div>
            <h1 className="font-semibold text-2xl uppercase text-black mt-10">Realizar Login</h1>
            <form className="w-8/12 mx-auto flex flex-col items-center justify-center flex-1">
                <label className="flex flex-col m-0 p-0 text-sm font-bold text-slate-950 mb-6 w-full">
                    E-mail
                    <input type="email"
                           className="mt-1 p-2 rounded-lg text-base border-slate-950 border-2 focus:border-red-800"
                           placeholder="seuemail@email.com" onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label className="flex flex-col m-0 p-0 text-sm font-bold text-slate-950 mb-6 w-full">
                    Senha
                    <input type="password" className="mt-1 p-2 rounded-lg text-base border-slate-950 border-2"
                           placeholder="senha"
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                </label>
                <button
                    className="bg-blue-500 text-white text-base font-bold rounded-lg  p-3 mt-2 w-4/6 hover:bg-blue-700"
                    type="submit">Entrar
                </button>
                <Link href={'/reset-password'} className="text-slate-950 font-bold mt-4 text-sm">Esqueci minha
                    senha</Link>
            </form>
        </section>
    );
}