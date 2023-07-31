import React, { useState } from 'react';

const UserList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  
  if (!users) {
    return <div> No hay usuarios para mostrar. </div>;
  }
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre}
            {user.apellido}
            {user.nacimiento}
            {user.dni}
            {user.email}
            {user.password}
            {user.image}
          </li>
        ))};
      </ul>
    <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
    </div>
  );
};

export default UserList;