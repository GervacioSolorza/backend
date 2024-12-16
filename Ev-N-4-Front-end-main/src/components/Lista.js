import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './lista.css';

const Lista = () => {
  const [contactos, setContactos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [contactosFiltrados, setContactosFiltrados] = useState([]);

  useEffect(() => {
    // Obtener los contactos almacenados en el localStorage
    const contactosLocalStorage = localStorage.getItem('contactos');
    if (contactosLocalStorage) {
      try {
        const parsedContactos = JSON.parse(contactosLocalStorage);
        setContactos(parsedContactos);
        setContactosFiltrados(parsedContactos); // Inicializa los contactos filtrados
      } catch (error) {
        console.error('Error al parsear los contactos del localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Filtra los contactos cada vez que el filtro cambia
    const resultados = contactos.filter(contacto =>
      contacto.name.toLowerCase().includes(filtro.toLowerCase()) ||
      contacto.email.toLowerCase().includes(filtro.toLowerCase()) ||
      contacto.phone.includes(filtro)
    );
    setContactosFiltrados(resultados);
  }, [filtro, contactos]);

  const eliminarContacto = (index) => {
    const contactosActualizados = [...contactos];
    contactosActualizados.splice(index, 1);
    setContactos(contactosActualizados);
    setContactosFiltrados(contactosActualizados); // Actualizar la lista filtrada
    localStorage.setItem('contactos', JSON.stringify(contactosActualizados));
  };

  return (
    <div className="container">
      <h2>Todos los Contactos:</h2>
      <Form.Control
        type="text"
        placeholder="Buscar por nombre, correo o teléfono..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="mb-4"
      />
      {contactosFiltrados.length === 0 ? (
        <p>No hay contactos que coincidan con tu búsqueda.</p>
      ) : (
        <Row>
          {contactosFiltrados.map((contacto, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card className="my-3 mx-2 custom-card">
                <Card.Body>
                  <Card.Title>{contacto.name}</Card.Title>
                  <Card.Text>
                    <strong>Correo:</strong> {contacto.email}<br />
                    <strong>Teléfono:</strong> {contacto.phone}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => eliminarContacto(index)}
                    className="delete-button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Lista;