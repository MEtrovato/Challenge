import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminView from './adminView';
import UserView from './userView';

export const Login = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [rol, setRol] = useState ('');
  const [logged, setLogged] = useState(false);

  function initSession(e){
    e.preventDefault();
   
    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    } 
      if (email === 'admin@admin.com' && password === 'ho1a1986') {
        setRol('admin');
        setLogged(true);
      } else if (email && password) {
        setRol('user');
        setLogged(true);
      } else {
        setEmail('');
        setPassword('');
        alert('Por favor, complete el formulario.');
      }
    }
  
  return (
    <div>
      {!logged && (
      <form>
        <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h1 className='font-sans text-3xl font-bold mb-6 text-gray-800'>Login</h1>
            <div>
                <div className='mb-4'>
                <label htmlFor='email'> E-mail: </label>
                <input type='email' id='email' placeholder='Ingrese su correo electronico' value={email} onChange={(e)=>setEmail(e.target.value)} className='border-b border-gray-300 focus:outline-none'/>
                </div>
                <div className='mb-6'>
                <label htmlFor='password'> Password: </label>
                <input type='password' id='password' placeholder='Ingrese su contraseña' value={password} onChange= {(e)=>setPassword(e.target.value)} className='border-b border-gray-300 focus:outline-none'/>
                </div>
                <div className='flex items-center justify-center'>
                <button onClick={initSession} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    Ingresar
                </button>
                </div>
                <div className='text-center mt-4'>
                <p>¿No estás registrado? <Link to="/register" className='text-center mt-4 text-purple-700'>Regístrate aquí</Link> </p>
                </div>
            </div>
            </div>
        </div>
            
      </form>
      )}
      {logged && (rol === 'admin' ? <AdminView/> : <UserView/> )},
    </div>
  ); 
}

export default Login;
