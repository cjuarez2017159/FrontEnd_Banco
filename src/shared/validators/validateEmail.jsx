
export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    
    return regex.test(email)
}

export const emailValidationMessage = 'Por favor ingrese un numero de cuenta valida'
