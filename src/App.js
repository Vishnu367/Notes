import { Outlet } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/AppRoutes/AppRoutes';
import NavBar from './components/NavBar/NavBar';
import NotesContainer from './components/NotesContainer/NotesContainer';
import UserNotes from './components/NotesContainer/UserNotes/UserNotes';
import NotesHomePage from './pages/NotesHomePage/NotesHomePage';

function App() {
  return (
    <div className="App">
      <NotesHomePage />
    </div>
  );
}

export default App;
