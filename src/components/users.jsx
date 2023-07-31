import React from 'react';

const Users = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id} className='first-letter:flex items-center justify-center'>
          <div className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h5 className='font-sans text-3xl font-bold mb-6 text-gray-800'> Datos del Usuario:</h5>
            <p>Nombre: {user.nombre}</p>
            <p>Apellido: {user.apellido}</p>
            <p>Nacimiento: {user.nacimiento}</p>
            <p>DNI: {user.dni}</p>
            <p>E-mail: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Imagen de Perfil: {user.image}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Users;