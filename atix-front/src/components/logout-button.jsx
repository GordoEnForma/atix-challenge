import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
export const LogoutButton = () => {
    const { logout } = useAuth();
    return (
        <Link to={"/"} onClick={() => logout()} >
            <button className="text-black p-2 bg-red-300 font-bold  mb-2 rounded-lg dark:bg-red-500 dark:text-white " >Cerrar sesión</button>
        </Link>
    )
}
