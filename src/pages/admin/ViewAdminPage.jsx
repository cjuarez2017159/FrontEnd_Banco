import React, { useEffect, useState } from 'react';
//import { getAllAccounts } from '../../services/api';
import CustomNavbar from '../../components/NavbarAdmin';
import './viewAdminPage.css';

export const ViewAdmin = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
//    getAllAccounts().then(data => setAccounts(data));
  }, []);

  const handleDeactivate = (accountId) => {
    // Lógica para desactivar cuenta
  };

  const handleEdit = (accountId) => {
    // Lógica para editar cuenta
  };

  const handleViewHistory = (accountId) => {
    // Lógica para ver historial
  };

  return (
    <div>
      <CustomNavbar user={{ name: "Usuario Ejemplo", accountNumber: "123456789" }} />
      <div className="dashboard-container">
            {accounts.map(account => (
              <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.name}</td>
                <td>{account.type}</td>
                <td>
                  <button onClick={() => handleDeactivate(account.id)}>Desactivar</button>
                  <button onClick={() => handleEdit(account.id)}>Editar</button>
                  <button onClick={() => handleViewHistory(account.id)}>Ver Historial</button>
                </td>
              </tr>
            ))}
      </div>
    </div>
  );
};