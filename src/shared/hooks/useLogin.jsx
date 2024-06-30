import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login as loginRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const login = async (account_number, password) => {  
        setIsLoading(true)

        const response = await loginRequest({
            account_number,  
            password
        })
        console.log(response)

        setIsLoading(false)
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Error al iniciar sesión'
            )
        }

        const { userDetails } = response.data
        if (userDetails) {  
            localStorage.setItem('user', JSON.stringify(userDetails))  
        } else {
            localStorage.removeItem('user')
        }

        navigate('/')
    }
    return {
        login,
        isLoading
    }
}
