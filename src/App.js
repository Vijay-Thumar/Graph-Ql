import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';
import { Routes, Route } from 'react-router-dom';
import Mutation from './pages/Mutation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<Character />} />
        <Route path='/mutation' element={<Mutation />} />
      </Routes>
      {/* <CharactersList/> */}
    </div>
  );
}

export default App;
