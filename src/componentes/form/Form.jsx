import React from 'react';
import  './form.css'

const Form = () => {
  return (
    <form className='mi-formulario'> 
      <label>
        Nombre:
        <input type="text" name="nombre" />
      </label>
      <label>
        Apellido:
        <input type="text" name="apellido" />
      </label>
      <label>
        Edad:
        <input type="number" name="edad" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
