import React, { useState } from 'react';
import { Link } from 'react-router-dom';
  
export const Register = () => {
  // eslint-disable-next-line 
  const [formSubmitted, setFormSubmitted] = useState('false');
  const [nombre, setNombre] = useState ('');
  const [apellido, setApellido] = useState ('');
  const [nacimiento, setNacimiento] = useState ('');
  const [dni, setDni] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [corfirmaPassword, setConfirmaPassword] = useState ('')
  const [image, setImage] = useState (null);
  
  function createUser(e){
    e.preventDefault();
    setFormSubmitted(true);
    
    if (!nombre || !apellido || !nacimiento || !dni || !email || !password || !image) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
    alert('La contraseña deben ser al menos 6 caracteres y contener una letra mayúscula y un número.');
    return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }
  }
     
  return (
    <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='font-sans text-3xl font-bold mb-6 text-gray-800'>Register</h2>
      <form>
        <div >
          <div className='mb-4'>
            <label htmlFor="nombre"> Nombre: </label>
            <input type="text" id="nombre" name="nombre" placeholder='Ingrese su Nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)} required className='w-48 h-8 px-1 border-b border-gray-300 focus:outline-none text-justify'/>
          </div>
          <div className='mb-6'>
            <label htmlFor="apellido"> Apellido: </label>
            <input type="text" id="apellido" ame="apellido" placeholder='Ingrese su Apellido' value={apellido} onChange={(e)=>setApellido(e.target.value)} required className='w-48 h-8 px-1 border-b border-gray-300 focus:outline-none'/>
          </div>
        </div>
        <div className='mb-6'>
          <label htmlFor="nacimiento"> Fecha de Nacimiento: </label>
          <input type="date" id="nacimiento" name="nacimiento" value={nacimiento} onChange={(e)=>setNacimiento(e.target.value)} required className='w-48 h-8 px-1 border-b border-gray-300 focus:outline-none'/>
        </div>
        <div className='mb-6'>
          <label htmlFor="dni"> DNI: </label>
          <input type="text" id="dni" name="dni" placeholder='Ingrese su DNI sin puntos' value={dni} onChange={(e)=>setDni(e.target.value)} required className='w-48 h-8 px-1 border-b border-gray-300 focus:outline-none'/>
        </div>
        <div className="mt-6">
          <label htmlFor="email"> Email: </label>
          <input type="email" id="email" name="email" placeholder='Ingrese su correo electronico' value={email} onChange={(e) => setEmail(e.target.value)} required className='w-48 h-8 px-1 border-b border-gray-300 focus:outline-none'/>
        </div>
        <div className="mt-6">
          <label htmlFor="password"> Contraseña: </label>
          <input type="password" id="password" name="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required className='w-48 h-8 px-1 border-b border-gray-300 focus:outline-none'/>
        </div>
        <div className="mt-6">
          <label htmlFor="confirmaPassword"> Repetir Contraseña: </label>
          <input type="password" id="confirmaPassword" name="confirmaPassword" placeholder='Confirmar Contraseña' onChange={(e) => setConfirmaPassword(e.target.value)} required className='w-48 h-8 px-1 border-b border-gray-300 focus:outline-none'/>
        </div>
        <div className="mt-6">
          <label htmlFor="image"> Imagen de Perfil: </label>
          <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} required className='w-48 md:w-1/2 h-8 px-1 '/>
        </div>
        <div className='flex items-center justify-center m-4'>
          <button onClick={createUser} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            <Link to="/"> Crear </Link> 
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}


export default Register;
