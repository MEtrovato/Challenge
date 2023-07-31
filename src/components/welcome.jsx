import React from 'react';

function Welcome () {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h1 className='font-sans text-3xl font-bold mb-6 text-gray-800'>Bienvenido(a) a nuestra aplicación</h1>
      <p>
        ¡Gracias por unirte a nosotros! Nuestra aplicación está diseñada para brindarte una experiencia increíble
        y facilitarte la vida en diversas áreas. Explora todas las características y funcionalidades que tenemos para ti.
      </p>
      <p>
        ¡Esperamos que disfrutes tu tiempo en nuestra aplicación y que sea una herramienta útil en tu día a día!
      </p>
      </div>
    </div>
  );
};

export default Welcome;
