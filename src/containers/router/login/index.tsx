import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginRequest } from '../../../action/login';
import { IStore } from '../../../types/store';
import { ILoginProps } from '../../../types/login';
import '../../../assets/css/style.css';

const validate = (values: ILoginProps) => {
  const errors: ILoginProps | any = {};
  if (!values.username) errors.username = 'Pleae enter user name';
  if (!values.password) errors.password = 'Pleae enter password';
  return errors;
};

const Login = () => {
  const { isLoggedIn, error } = useSelector((state: IStore) => state.user);
  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) history.push('/dashboard');
  }, [isLoggedIn, history]);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: 'admin@axiongroup.com',
      password: 'admin@axiongroup.com',
    },
    validate,
    onSubmit: (values: ILoginProps) => {
      dispatch(loginRequest(values));
    },
  });
  return (
    <div>
      <img
        src="https://img1.wsimg.com/isteam/ip/29a68ad5-785f-470c-8377-425da9230e6d/logo/591580ec-54d7-4a81-8e89-b266b9b27fe0.png"
        alt="AXION"
        width="150px"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div>
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Login</h1>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="txtUsername"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        placeholder="Enter User Name"
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <div className="error">{formik.errors.username}</div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        id="txtPassword"
                        name="password"
                        placeholder="Enter Password"
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                      ) : (
                        ''
                      )}
                    </div>
                    {error !== '' ? <div className="form-group error text-center">{error}</div> : ''}
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-block mybtn btn-primary tx-tfm">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
