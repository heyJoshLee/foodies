import './App.css';
import Feed from './components/Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import User from './components/UserPage/User';
import Recipe from './components/Recipes/Recipe';
import Nav from './components/Nav/Nav';
import Recipes from './components/Recipes/Recipes';
import MessagesPage from './components/Messages/MessagesPage';
import SavedItems from './components/SavedItems/SavedItems';
import Tags from './components/Tags/Tags';
import Tag from './components/Tags/Tag';
import NewRecipe from './components/Recipes/NewRecipe';
function App() {



  return (
    <div className="App">
      <div className='container-flex p-4'>
        <div className='row'>
          <div className='col-2'>
            <Nav />
          </div>
          <main className='col-10 p-2'>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/users/:id' element={<User />} />
              <Route path='/recipes' element={<Recipes />} />
              <Route path='/recipes/new' element={<NewRecipe />} />
              <Route path='/recipes/:id' element={<Recipe />} />
              <Route path='/tags' element={<Tags />} />
              <Route path='/tags/:id' element={<Tag />} />
              <Route path='/messages' element={<MessagesPage />} />
              <Route path='/saved' element={<SavedItems />} />
            </Routes>
          </main>

        </div>

      </div>
    </div>
  );
}

export default App;
