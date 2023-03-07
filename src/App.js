import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
      {/* <CharactersList/> */}
    </div>
  );
}

export default App;
