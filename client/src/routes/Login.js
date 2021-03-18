import Axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLocalLogin = async (event) => {
    //locallogin
    event.preventDefault();
    console.log('local-login');
    const data = { email, password };
    await Axios.post('http://localhost:3001/auth/local-login', data);
  };
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <form onSubmit={onLocalLogin}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={email}
            required
            autoFocus
            onChange={onChange}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={onChange}
          />
        </div>
        <input type="submit" value="로그인" />
      </form>
      <a href="/auth/kakao-login">카카오</a>
    </>
  );
};

export default Login;
