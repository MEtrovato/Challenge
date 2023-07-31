import React, { useState }  from 'react'
import { Link } from 'react-router-dom'; 
import EditProfile from './editProfile';

const Profile = ({ nombre, apellido, nacimiento, dni, email, password, image, onEditar, onEliminar }) => {
    const [editar, setEditar] = useState(false);
    const [editarNombre, setEditarNombre] = useState (nombre);
    const [editarApellido, setEditarApellido] = useState (apellido);
    const [editarNacimiento, setEditarNacimiento] = useState (nacimiento);
    const [editarDni, setEditarDni] = useState (dni);
    const [editarEmail, setEditarEmail] = useState (email);
    const [editarPassword, setEditarPassword] = useState (password);
    const [editarImage, setEditarImage] = useState (image);

const handleGuardar = () => {
    onEditar(editarNombre, editarApellido, editarNacimiento, editarDni, editarEmail, editarPassword, editarImage);
    setEditar(false);
    };

  return (
    <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        {editar ? (
            <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
                <div>
                    <label> Nombr: </label>
                    <input type='text' value={editarNombre} onChange={(e) => setEditarNombre(e.target.value)}/>
                </div>
                <div>
                    <label> Apellido: </label>
                    <input type='text' value={editarApellido} onChange={(e) => setEditarApellido(e.target.value)}/>
                </div>
                <div>
                    <label> Nacimiento: </label>
                    <input type='date' value={editarNacimiento} onChange={(e) => setEditarNacimiento(e.target.value)}/>
                </div>
                <div>
                    <label> DNI: </label>
                    <input type='text' value={editarDni} onChange={(e) => setEditarDni(e.target.value)}/>
                </div>
                <div>
                    <label> E-mail: </label>
                    <input type='email' value={editarEmail} onChange={(e) => setEditarEmail(e.target.value)}/>
                </div>
                <div>
                    <label> Password: </label>
                    <input type='text' value={editarPassword} onChange={(e) => setEditarPassword(e.target.value)}/>
                </div>
                <div>
                    <label> Imagen de Perfil: </label>
                    <input type='file' value={editarImage} onChange={(e) => setEditarImage(e.target.value)}/>
                </div>
                <button onClick={handleGuardar}> Guardar </button>
            </div>
        ) : (
            <div>
                <h5> Perfil del Usuario:</h5>
                <p>Nombre:{nombre}</p>
                <p>Apellido:{apellido}</p>
                <p>Nacimiento:{nacimiento}</p>
                <p>DNI:{dni}</p>
                <p>E-mail:{email}</p>
                <p>Password:{password}</p>
                <p>Image de Perfil:{image}</p>
                <br></br>
                <div>
                    <button onClick={() => setEditar(true)}>
                        <Link to='/editProfile' className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4'>
                        Editar
                        </Link>
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

export default Profile;
