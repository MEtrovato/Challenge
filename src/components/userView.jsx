import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Welcome from './welcome'

const UserView = () => {
    const navigate = useNavigate(); 

    const onClick = () => {
        navigate('/Profile');
      };

    const onLogout = () => {
        localStorage.removeItem('authToken');
        window.location.href = '/';
    };

    return (
        <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
          <div className='rounded px-8 pt-6 pb-8 mb-4 justify-center'>
            <Welcome />
            <div className='flex items-center justify-center'>
              <button onClick={onClick} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4'>
                <Link to='./Profile'>Perfil</Link>
              </button>
              <button onClick={onLogout} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                <Link to='/'>Cerrar sesión</Link>
              </button>
            </div>
          </div>
        </div>
      );
}

export default UserView;
