import React from 'react';

const RecipeDirection = (props) => {
  const { direction, index } = props;
  return (
    <li className='recipe-ingredient list-group-item'>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id={`direction-${index}`} />
            <label class="form-check-label" for={`direction-${index}`}>
              {direction}
            </label>
          </div>
        </div>
      </div>
    </li>
  )
}

export default RecipeDirection;