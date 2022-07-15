import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BooksList from './Components/BooksList';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
