import Axios from 'axios';
import React, { useState } from 'react';

const Join = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

    console.log(res);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
        </div>
        <div>
          <input type="submit" value="회원가입" />
        </div>
      </form>
    </>
  );
};

export default Join;
