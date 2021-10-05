import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setEmailUser, selectEmailUser } from "../Store/User/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const emailUser = useSelector(selectEmailUser);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const setNewEmailUser = useCallback(
    (userEmail) => {
      dispatch(setEmailUser(userEmail));
    },
    [dispatch]
  );

  useEffect(() => {
    if (window.localStorage.getItem("userEmail") !== null) {
      setNewEmailUser(window.localStorage.getItem("userEmail"));
    }
  }, [setNewEmailUser]);

  useEffect(() => {
    if (emailUser !== "") {
      history.push("/");
    }
  }, [emailUser, history]);

  const onSubmit = ({ userEmail }) => setNewEmailUser(userEmail);

  return (
    <div className="container-sm">
      <div className="row justify-content-center">
        <div className="col-xs-10 col-sm-11 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-sm mb-5 bg-body rounded">
            <div className="card-header">
              <h5 className="card-title">Acceder</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    id="userEmail"
                    type="email"
                    className={`form-control ${
                      errors.userEmail ? "is-invalid" : ""
                    }`}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register("userEmail", { required: true })}
                  />
                  {errors.userEmail && (
                    <div className="invalid-feedback">
                      Este campo es requerido
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-dark">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
