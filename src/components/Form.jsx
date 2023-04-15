import React, { useState } from 'react';
import './Form.css'; // Importa el archivo CSS
import validations from './validations.jsx';

const Form = ({login}) => {
  const [errors, setErrors] = useState({})
  const [userData, setUserData] = useState({
      email: '',
      password: ''        
  })

  const handleChange = (event) =>{
      setUserData({
          ...userData,
          [event.target.name] : event.target.value
      })

      setErrors(validations({
          ...userData,
          [event.target.name] : event.target.value
      }))

  }

  const handleSubmit = (event) => {
      event.preventDefault()
      login(userData)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="label">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className={errors.email ? "input error" : "input"}
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <div className="error-message">{errors.email}</div>}

      <label htmlFor="password" className="label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className={errors.password ? "input error" : "input"}
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <div className="error-message">{errors.password}</div>}

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default Form;