// ViewAdminPage.jsx
import React, { useEffect, useState } from 'react';
import { getAllAccounts, deactivateAccount, editAccount } from '../../services/api';
import CustomNavbar from '../../components/Navbar';
import EditAccountForm from '..//../components/EditAccountForm';
import './viewAdminPage.css';

export const ViewAdmin = () => {
    const [accounts, setAccounts] = useState([]);
    const [editingAccount, setEditingAccount] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        const fetchAccounts = async () => {
            const response = await getAllAccounts(limit, page * limit);
            if (!response.error) {
                setAccounts(response.data);
            } else {
                console.error('Error fetching accounts:', response.e);
            }
        };

        fetchAccounts();
    }, [page, limit]);

    const handleDeactivate = async (accountId) => {
        const response = await deactivateAccount(accountId);
        if (!response.error) {
            setAccounts(accounts.filter(account => account.id !== accountId));
        } else {
            console.error('Error deactivating account:', response.e);
        }
    };

    const handleEdit = (accountId) => {
        const account = accounts.find(account => account.id === accountId);
        setEditingAccount(account);
    };

    const handleSaveEdit = async (updatedAccount) => {
        const response = await editAccount(editingAccount.id, updatedAccount);
        if (!response.error) {
            setAccounts(accounts.map(account => (account.id === editingAccount.id ? response.data : account)));
            setEditingAccount(null);
        } else {
            console.error('Error editing account:', response.e);
        }
    };

    const handleCancelEdit = () => {
        setEditingAccount(null);
    };

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 0));
    };

    return (
        <div>
            <CustomNavbar user={{ name: "Usuario Ejemplo", accountNumber: "123456789" }} />
            <div className="dashboard-container">
                {editingAccount ? (
                    <EditAccountForm
                        account={editingAccount}
                        onSave={handleSaveEdit}
                        onCancel={handleCancelEdit}
                    />
                ) : (
                    <div>
                        {accounts.map(account => (
                            <div className="card" key={account.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{account.name}</h5>
                                    <p className="card-text">ID: {account.id}</p>
                                    <p className="card-text">Tipo: {account.type}</p>
                                    <button className="btn btn-warning" onClick={() => handleEdit(account.id)}>Editar</button>
                                    <button className="btn btn-danger" onClick={() => handleDeactivate(account.id)}>Desactivar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
