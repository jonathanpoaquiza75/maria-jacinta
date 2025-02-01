import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'; // Archivo CSS para estilos personalizados

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Si la fecha y hora están vacíos, no son obligatorios para contacto
    if (!formData.date || !formData.time) {
      setError('');
    }

    // Simulación de envío exitoso
    setError('');
    setSubmitted(true);
    console.log('Formulario enviado:', formData);

    // Limpiar el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h2 className="text-center mb-4">Contáctanos</h2>
        {submitted && (
          <Alert variant="success" className="text-center">
            ¡Gracias por tu mensaje o reserva! Nos pondremos en contacto pronto.
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </Form.Group>

          {/* Fecha y Hora solo para reservas */}
          <Form.Group controlId="formDate" className="mb-3">
            <Form.Label>Fecha de Reserva (opcional):</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formTime" className="mb-3">
            <Form.Label>Hora de Reserva (opcional):</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Mensaje:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Escribe tu mensaje o detalles de la reserva"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
