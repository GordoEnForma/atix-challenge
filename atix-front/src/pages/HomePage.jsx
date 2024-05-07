import { useState } from "react"
import { LoginForm } from "../components/login-form"
import { RegisterForm } from "../components/register-form"



const Tab = ({ label, onClick, active }) => (
    <button onClick={onClick}
        className={`px-4 py-2 border-2 rounded-lg ${active ? "bg-gray-200 font-bold text-slate-800 border-gray-400 dark:bg-slate-900 dark:border-gray-600 dark:text-slate-200": "dark:bg-slate-900 dark:border-gray-700 dark:text-slate-200"}`}>
        {label}
    </button>
);

export const HomePage = () => {
    const [selectedTab, setSelectedTab] = useState("login");

    return (
        <div className="flex flex-col h-screen  w-full items-center justify-center bg-gray-100 dark:bg-slate-950">
            <div>
                <div className="flex  gap-2 mb-4">
                    <Tab active={selectedTab === "login"} label="Iniciar Sesión" onClick={() => setSelectedTab("login")} />
                    <Tab active={selectedTab === "register"} label="Registrarse" onClick={() => setSelectedTab("register")} />
                </div>

                {selectedTab === "login" ? <LoginForm /> : <RegisterForm />}

            </div>
        </div>
    );
};