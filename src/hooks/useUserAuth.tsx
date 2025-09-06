import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"
import type { UserContextType } from "../../types"
import { useNavigate } from "react-router-dom";


export const useUserAuth = () => {

    const { user, loading, clearUser } = useContext(UserContext) as UserContextType;
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) return;

        if (!user) {
            clearUser();
            navigate("/login");
        }
    }, [user, loading, clearUser, navigate]);

}
