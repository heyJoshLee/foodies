import React, { useState } from 'react';
import { createMessage } from '../../reducers/messageSlice';
import { useDispatch } from 'react-redux';

const NewMessageForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: ''
  })

  const user = { username: 'josh', _id: '1' }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.content) { return }
    const newMessageValues = {
      content: formData.content,
      user: user
    }
    dispatch(createMessage(newMessageValues));
    setFormData({
      content: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      content: e.target.value
    })
  }


  return (
    <form className="row align-items-center" onSubmit={handleSubmit}>
      <div className="col-10">
        <label className="visually-hidden" htmlFor="inlineFormInputGroupMessage">Username</label>
        <div className="input-group">
          <input type="text"
            className="form-control"
            id="inlineFormInputGroupMessage"
            placeholder="Message..."
            value={formData.content}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">Send</button>
      </div>
    </form>
  )
}

export default NewMessageForm;