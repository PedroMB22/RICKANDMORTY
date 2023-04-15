import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Route,Routes, Navigate } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx'
import Error from './components/Error.jsx';
import Form from './components/Form.jsx';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites.jsx';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '7a45df87efdb.fae8f3dd5fb515304e03'


const email = 'pedrom.bocco@gmail.com';
  const password = 'Aika123';
  
function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  

  const login = (userData) => {
   if (userData.email === email && userData.password === password){
      setAccess(true)
      navigate('/home')
   }

}

useEffect(() => {
   !access && navigate('/') 

}, [access])

const onSearch = (id) =>{
  axios(`${URL_BASE}/${id}?key=${API_KEY}`)
  .then(response => response.data)
  .then(( data ) => {
  if (data.name) {
     setCharacters((oldChars) => [...oldChars, data]);
  } else {
     alert('¡No hay personajes con este ID!');
  }
});
}

  const onClose= (id) => {
    const charactersfilter = characters.filter(character =>character.id !== parseInt(id) );
    setCharacters(charactersfilter);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className='App'>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/' element={<Form
          email={userData.email}
          password={userData.password}
          handleChange={handleChange}
          login={login} 
        />} />
        <Route path='*' element={<Error />} />
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;