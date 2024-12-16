import React from 'react';
import { Container } from 'react-bootstrap';
import Formulario from './Formulario';
import './addContactPage.css';

const AddContactPage = () => {
  const handleEnviarFormulario = (formData) => {
    //console.log('Valores ingresados:', formData);
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div>
      <Container>
        <h1>Ingrese los datos del nuevo contacto</h1>
        <Formulario onEnviar={handleEnviarFormulario} />
      </Container>
    </div>
  );
};

export default AddContactPage;