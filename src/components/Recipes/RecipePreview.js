import React from 'react';
import { Link } from 'react-router-dom';

const ReceipePreivew = (props) => {
  const { image, name, _id, description } = props.recipe;

  return (
    <div className='receipe-preview'>
      <div className='post m-5' >
        <div className='card mb-3 p-3'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <Link to={`/recipes/${_id}`}>
                <img src={image} className='img-fluid rounded-start' />
              </Link>
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <Link to={`/recipes/${_id}`}>
                  <h5 className='card-title'>{name}</h5>
                </Link>
                <p className='card-text'>{description}</p>
                <Link to={`/recipes/${_id}`}>
                  <p className='card-text'><small className='text-muted'>View recipe</small></p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReceipePreivew;