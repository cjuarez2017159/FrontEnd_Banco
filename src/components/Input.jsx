/* Input.jsx */
import React from "react";
/* eslint-disable react/prop-types */
export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div className="auth-form-label">
                <label htmlFor={field}>{label}</label>
            </div>
            {textarea ? (
                <textarea
                    id={field}
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                    rows={5}
                    style={{ maxWidth: '400px' }}
                />
            ) : (
                <input
                    id={field}
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                />
            )}
            <span className="auth-form-validations-message" style={{ color: "#F99417" }}>
                {showErrorMessage && validationMessage}
            </span>
        </>
    )
}
