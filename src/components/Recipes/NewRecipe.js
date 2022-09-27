import React, { useState } from 'react';
import NewRecipeIngredient from './NewRecipeIngredient';
import NewRecipeDirectionsContainer from './NewRecipeDirectionsContainer';
const NewRecipe = () => {


  const [formData, setFormData] = useState({
    ingredients: []
  }
  )


  const addIngredient = (e) => {
    e.preventDefault();
    const ingredients = [...formData.ingredients, { values: { tempId: formData.ingredients.length } }];
    setFormData({
      ...formData,
      ingredients
    });
  }

  const handleOnchange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value
    });
  }

  const handleOnChangeIngredient = (index, values) => {
    formData.ingredients[index] = { values }
    setFormData({
      ...formData
    })
  }

  const deleteIngredient = (tempId) => {

    let newIngredients = formData.ingredients.filter((ingredient) => ingredient.values.tempId !== tempId)
    setFormData({
      ...formData,
      ingredients: newIngredients
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='text-center'>New Recipe</h1>
      <div className="mb-3">
        <label htmlFor="recipe-name" className="form-label">Recipe Name</label>
        <input required type="input" className="form-control" id="recipe-name" placeholder="Your Awesome Recipe" name="name" value={formData.name} onChange={handleOnchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="recipe-image" className="form-label">Main image</label>
        <input required className="form-control" type="file" id="recipe-image" name="image" value={formData.image} onChange={handleOnchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="recipe-description" className="form-label">Description</label>
        <textarea className="form-control" id="recipe-description" rows="3" name="description" value={formData.description} onChange={handleOnchange}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="recipe-servings" className="form-label">Number of Servings</label>
        <input required type="number" className="form-control" id="recipe-servings" placeholder="2" name="servings" value={formData.servings} onChange={handleOnchange} />
      </div>
      <div className='row'>
        <div className='col-2'>
          Ingredients
        </div>
        <div className='col-3'>
          <button className='btn btn-primary' onClick={addIngredient}>Add Ingredient</button>
        </div>
      </div>
      < hr />
      <ol>
        {formData.ingredients.map((ingredient, index) => <NewRecipeIngredient ingredient={ingredient} key={`ingredient-${index}`} index={index} handleOnChangeIngredient={handleOnChangeIngredient} deleteIngredient={deleteIngredient} />)}
      </ol>
      <div className="mb-3">
        <NewRecipeDirectionsContainer />
      </div>
      <div className="mb-3">
        <label htmlFor="recipe-tags" className="form-label">Tags</label>
        <input required type="input" className="form-control" id="recipe-tags" placeholder="Burger, Beef, etc..." name='tags' />
      </div>
    </form>
  )
}

export default NewRecipe;