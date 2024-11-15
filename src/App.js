import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Phages/Home';
import About from './Phages/About';
import Services from './Phages/Services';
import Contact from './Phages/Contact';
import NotFound from './Phages/NotFound';
import Layout from './components/Layout';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
