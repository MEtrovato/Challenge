import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserList from './userList';

const AdminView = () => {
    const navigate = useNavigate(); 

    const onLogout = () => {
        localStorage.removeItem('authToken');
        window.location.href = '/';
    };

    return (
        <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <UserList/>
        <div className='flex items-center justify-center mb-6'>
            <button onClick={onLogout} >
                <Link to='/' className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4'> Cerrar sesión </Link>
            </button>
        </div>
        </div>
        </div>
    )
}

export default AdminView
