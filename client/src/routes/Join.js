import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Join = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };
    const res = await Axios.post('http://localhost:3001/auth/join', data);
    if (res.status === 200) {
      console.log('200ok');
      history.push('/login');
    }
  };

  return (
    <div style={{}}>
      <form onSubmit={onSubmit}>
        <div style={{ textAlign: 'center' }}>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={onChange}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <input type="submit" value="회원가입" />
        </div>
      </form>
    </div>
  );
};

export default Join;
