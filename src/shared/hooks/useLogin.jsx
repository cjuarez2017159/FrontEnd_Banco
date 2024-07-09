import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (account_number, password) => {
        setIsLoading(true);
        const response = await loginRequest({
            account_number,
            password
        });
        console.log(response);

        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Error al iniciar sesión'
            );
        }

        const { user } = response.data;
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }

        // Navegación basada en el rol del usuario
        if (user && user.role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/');
        }
    };

    return {
        login,
        isLoading
    };
};
