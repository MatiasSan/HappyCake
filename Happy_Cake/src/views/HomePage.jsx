import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenidos a <b> Happy Cake</b>
      </h1>
      <p>el lugar de los pasteles felices</p>
      <span role="img" aria-label="pastel" style={{ fontSize: '4em' }}>
        🎂
      </span>
    </Container>
  );
};

export default HomePage;
