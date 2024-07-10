import React, { useState, useEffect } from 'react';

const EditAccountForm = ({ account, onSave, onCancel }) => {
    const [formState, setFormState] = useState({
        name: account.name,
        type: account.type,
        // Agrega más campos según sea necesario
    });

    useEffect(() => {
        setFormState({
            name: account.name,
            type: account.type,
            // Agrega más campos según sea necesario
        });
    }, [account]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Tipo:</label>
                <input
                    type="text"
                    name="type"
                    value={formState.type}
                    onChange={handleInputChange}
                />
            </div>
            {/* Agrega más campos según sea necesario */}
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default EditAccountForm;
