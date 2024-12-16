import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './formulario.css'; // Importa el archivo CSS

const Formulario = ({ onEnviar }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [showError, setShowError] = useState({
    name: false,
    phone: false,
    email: false
  });

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validación del nombre
    if (!formData.name) {
      errors.name = 'Por favor, ingresa un nombre';
    }

    // Validación del número de teléfono
    if (!formData.phone) {
      console.log("if phone");
      errors.phone = 'Por favor, ingresa un número de teléfono';
    } else if (!/^\+[0-9]+$/.test(formData.phone)) {
      console.log("eliif phone");
      errors.phone = 'Número de teléfono inválido. Debe comenzar con un "+" y contener solo números.';
    }

    // Validación del correo electrónico
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email) {
      console.log("if correo");
      errors.email = 'Por favor, ingresa un correo';
    } else if (!emailRegex.test(formData.email)) {
      console.log("elif correo");
      errors.email = 'Correo inválido. Por favor, ingresa un correo válido';
    }
    console.log(errors);

    setShowError({
      name: !!errors.name,
      phone: !!errors.phone,
      email: !!errors.email
    });

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Formulario válido. Enviando datos:', formData);

      // Obtiene la lista actual de contactos o inicializa una nueva si no existe
      const currentContacts = JSON.parse(localStorage.getItem('contactos')) || [];
      // Añade el nuevo contacto a la lista
      currentContacts.push(formData);
      // Guarda la lista actualizada en localStorage
      localStorage.setItem('contactos', JSON.stringify(currentContacts));

      onEnviar(formData);
      setShowSuccessModal(true);
  } else {
      console.log('Formulario inválido:', errors);
  }
  };

  return (
    <div className="formulario-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={showError.name}
          />
          <Form.Control.Feedback type="invalid">
          {errorMessages.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Número de teléfono</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={showError.phone}
          />
          <Form.Control.Feedback type="invalid">
          {errorMessages.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={showError.email}
          />
          <Form.Control.Feedback type="invalid">
          {errorMessages.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      <Modal show={showSuccessModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro Exitoso</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Tu registro ha sido completado exitosamente!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Formulario;