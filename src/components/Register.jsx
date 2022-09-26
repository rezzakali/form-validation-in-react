import React, { useState } from 'react';
import Input from './Input';

function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      className: 'form-control',
      placeholder: 'Username',
      errorMessage:
        'Username should be 3-12 characters with not containing any special characters!',
      label: 'username',
      pattern: '[a-zA-Z0-9]{3,12}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      className: 'form-control',
      placeholder: 'Email',
      errorMessage: 'Email must be required!',
      label: 'email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      className: 'form-control',
      label: 'Birthday',
      errorMessage: 'birth day must be required!',
      required: true,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      className: 'form-control',
      placeholder: 'password',
      label: 'password',
      required: true,
      errorMessage: 'password must be required!',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'confirm password',
      label: 'confirm password',
      required: true,
      className: 'form-control',
      pattern: values.password,
      errorMessage: "Password don't match",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border rounded p-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
