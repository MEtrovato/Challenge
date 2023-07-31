import React, { useState } from 'react';

const EditProfile = ({ user, onEditar, onEliminar }) => {
  const { nombre, apellido, nacimiento, dni, email, password, image } = user;
  const [editar, setEditar] = useState(false);
  const [editarNombre, setEditarNombre] = useState(nombre);
  const [editarApellido, setEditarApellido] = useState(apellido);
  const [editarNacimiento, setEditarNacimiento] = useState(nacimiento);
  const [editarDni, setEditarDni] = useState(dni);
  const [editarEmail, setEditarEmail] = useState(email);
  const [editarPassword, setEditarPassword] = useState(password);
  const [editarImage, setEditarImage] = useState(image);

  const handleGuardar = () => {
    onEditar(editarNombre, editarApellido, editarNacimiento, editarDni, editarEmail, editarPassword, editarImage);
    setEditar(false);
  };

  return (
    <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        {editar ? (
          <div>
            <label>Nombre:</label>
            <input type='text' value={editarNombre} onChange={(e) => setEditarNombre(e.target.value)} />
            <label>Apellido:</label>
            <input type='text' value={editarApellido} onChange={(e) => setEditarApellido(e.target.value)} />
            <label>Nacimiento:</label>
            <input type='date' value={editarNacimiento} onChange={(e) => setEditarNacimiento(e.target.value)} />
            <label>DNI:</label>
            <input type='text' value={editarDni} onChange={(e) => setEditarDni(e.target.value)} />
            <label>E-mail:</label>
            <input type='email' value={editarEmail} onChange={(e) => setEditarEmail(e.target.value)} />
            <label>Contraseña:</label>
            <input type='password' value={editarPassword} onChange={(e) => setEditarPassword(e.target.value)} />
            <label>Imagen de Perfil:</label>
            <input type='file' value={editarImage} onChange={(e) => setEditarImage(e.target.value)} />
            <button onClick={handleGuardar}> Guardar </button>
          </div>
        ) : (
          <div>
            <h5 className='font-sans text-3xl font-bold mb-6 text-gray-800'>Perfil del Usuario:</h5>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Nacimiento: {nacimiento}</p>
            <p>DNI: {dni}</p>
            <p>E-mail: {email}</p>
            <p>Password: {password}</p>
            <p>Imagen de Perfil: {image}</p>
            <br />
            <div>
              <button onClick={() => setEditar(true)} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4'>
                Editar
              </button>
              <button onClick={() => onEliminar()} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;