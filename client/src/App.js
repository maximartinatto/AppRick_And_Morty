import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorite/Favorites.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

const URL_BASE = 'http://localhost:3001/rickandmorty/character';


const email = 'martinattomaximiliano@gmail.com';
const password = 'riverplate564';

function App(){
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [acces, setAcces] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAcces(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !acces && navigate('/')
   }, [acces])

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}`) // forma correcta de trabajar
      .then(response => response.data)
      .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
      });
   }
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => 
      character.id !== id) 
      setCharacters(charactersFiltered)
   }
   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch} setAcces={setAcces}/>
            : null
         }
         
         <Routes>
            <Route path='/'element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/favorite' element={<Favorites/>}/>
            <Route path='/detail/:id'element={<Detail/>}/>
         </Routes>
      </div>
   )
}

export default App;