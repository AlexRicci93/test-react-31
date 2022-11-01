import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Details } from './Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  );
}

export default App;
