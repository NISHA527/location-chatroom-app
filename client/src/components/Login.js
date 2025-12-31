import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
      <a href="/auth/google">Login with Google</a>
    </form>
  );
};
export default Login;