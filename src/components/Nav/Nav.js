import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav flex-column bg-primary">

      <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
      <Link className="nav-link active text-white" aria-current="page" to="/recipes">Browse Recipes</Link>
      <Link className="nav-link text-white text-white" to='/messages'>Messages</Link>
      <Link className="nav-link text-white" to="/saved">Saved</Link>
      <a className="nav-link text-white" href="#">Profile</a>
      <a className="nav-link text-white" href="#">
        <div type='button' className='btn btn-light'>
          New Post
        </div>
      </a>
      <a className="nav-link text-white" href="#">
        <div type='button' className='btn btn-light'>
          New Recipe
        </div>
      </a>    </nav>
  )
}

export default Nav;