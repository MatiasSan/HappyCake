import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

//Importando Views

import HomePage from './views/HomePage';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
