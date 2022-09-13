import './App.css';
import Feed from './components/Feed';
import { Routes, Route } from 'react-router-dom';
import User from './components/UserPage/User';
import Recipe from './components/Recipes/Recipe';


function App() {
  return (
    <div className="App">
      <div className='container-flex'>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/recipes/:id' element={<Recipe />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
