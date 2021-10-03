import { useEffect } from "react";
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
    formState: { errors },
  } = useForm();

  useEffect(()=> {
    if(window.localStorage.getItem("userEmail") !== null){
        setNewEmailUser(window.localStorage.getItem("userEmail"));
    }
  }, [])

  useEffect(() => {
    if (emailUser !== "") {
      history.push("/");
    }
  }, [emailUser, history]);

  const setNewEmailUser = (userEmail) => dispatch(setEmailUser(userEmail))

  const onSubmit = ({ userEmail }) => setNewEmailUser(userEmail);

  return (
    <div className="container-sm">
      <div className="row justify-content-center">
        <div className="col-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                id="userEmail"
                type="email"
                className={`form-control ${
                  errors.userEmail ? "is-invalid" : ""
                }`}
                {...register("userEmail", { required: true })}
              />
              {errors.userEmail && (
                <div className="invalid-feedback">Este campo es requerido</div>
              )}
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
