import logo from './logo.svg';
import Book from './Components/Book';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import Navbar from './Components/Navbar';
import Catagories from './Components/Catagories';

function App() {
  return (
    <Router className="route">
      <Navbar />
       <Provider store={store}>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
      </Provider>
    </Router>
    
  );
}

export default App;
