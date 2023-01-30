import React from 'react';
import LoginForm from '../../components/loginForm';

export default function Login() {
  return (
    <div
      className="container flex flex-col gap-16 items-center justify-center"
    > 
      <h1
        className='text-blue-500 text-2xl'
      >
        Faça login e experimente tudo o que temos a oferecer!
      </h1>
      <LoginForm/>
    </div>
  );
}