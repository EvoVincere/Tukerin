/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api-endpoint';
// eslint-disable-next-line import/order
import { toast } from 'react-toastify';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      toast.success('Daftar akun berhasil, Silahkan Login !');
      navigate('/login');
    }
  }
  return (
    <div className="register-page">
      <h2>Register Sekarang</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Sudah punya akun?
        <Link className="link" to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
