import { Container, Button, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Cuentanos, ¿En qué te podemos ayudar?</h1>
      <Form className="pt-5">
        <Form.Group className="mb-3">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="correo@correo.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>

      <Button variant="danger">Enviar</Button>
    </Container>
  );
};

export default Contact;
