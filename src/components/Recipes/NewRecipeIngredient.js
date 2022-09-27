import React, { useState, useEffect } from 'react';

const NewRecipeIngredient = (props) => {
  const { index, handleOnChangeIngredient, deleteIngredient, ingredient } = props;

  const [formData, setFormData] = useState({
    quantity: ingredient.values.quantity || "",
    measurement: ingredient.values.measurement || "",
    ingredient: ingredient.values.ingredient || "",
    tempId: ingredient.values.tempId || index
  });

  useEffect(() => {
    handleOnChangeIngredient(index, formData);
  }, [])

  useEffect(() => {
    setFormData({
      quantity: ingredient.values.quantity || "",
      measurement: ingredient.values.measurement || "",
      ingredient: ingredient.values.ingredient || "",
      tempId: ingredient.values.tempId || index
    })
  }, [props])

  const handleOnChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newFormData = {
      ...formData,
      [key]: value
    }

    setFormData(newFormData)
    handleOnChangeIngredient(index, newFormData)
  };


  const turnOnPointer = () => document.body.style.cursor = 'pointer';
  const turnOffPointer = () => document.body.style.cursor = 'default';

  return (
    <li className="mb-3 row">
      <div className='col-1 pt-5'>
        <i className="bi bi-x-circle" onClick={() => deleteIngredient(ingredient.values.tempId)} onMouseEnter={turnOnPointer} onMouseLeave={turnOffPointer}></i>
      </div>
      <div className='col-2' >
        <label htmlFor="recipe-quantity" className="form-label">Quantity</label>
        <input required min="0" type="number" className="form-control" id="recipe-quantity" placeholder="1.25" name="quantity" onChange={handleOnChange} value={formData.quantity} />
      </div>
      <div className='col-2' >
        <label htmlFor="recipe-measurement" className="form-label">Measurement</label>
        <input required type="input" className="form-control" id="recipe-measurement" placeholder="Gallon, oz, etc..." name="measurement" onChange={handleOnChange} value={formData.measurement} />
      </div>
      <div className='col-7' >
        <label htmlFor="recipe-ingredient" className="form-label">Ingredient</label>
        <input required type="input" className="form-control" id="recipe-ingredient" placeholder="Cheese, milk, etc..." name="ingredient" onChange={handleOnChange} value={formData.ingredient} />
      </div>
    </li>
  )
}

export default NewRecipeIngredient;