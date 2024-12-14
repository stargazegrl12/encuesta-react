import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EncuestaComponent } from './components/Encuesta';
import { QRComponent } from './components/QR';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path= '/' Component={EncuestaComponent} ></Route>
      <Route exact path= '/cupon' Component={QRComponent} ></Route>
    </Routes>
    </BrowserRouter>
  )

}

export default App;
