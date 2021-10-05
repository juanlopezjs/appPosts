import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreatePost } from "../Store/Post/postSlice";
import { selectEmailUser } from "../Store/User/userSlice";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const emailUser = useSelector(selectEmailUser);
  const history = useHistory();

  const onSubmit = ({ namePost, contentPost }) => {
    dispatch(fetchCreatePost(namePost, contentPost, emailUser));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xs-10 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-3 ">
        <div className="card shadow-sm mb-5 bg-body rounded">
          <div className="card-header">
            <h5 className="card-title">Crear publicación</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Nombre del post</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.namePost ? "is-invalid" : ""
                  }`}
                  {...register("namePost", { required: true })}
                />
                {errors.namePost && (
                  <div className="invalid-feedback">
                    Este campo es requerido
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Contenido del post</label>
                <textarea
                  className={`form-control ${
                    errors.contentPost ? "is-invalid" : ""
                  }`}
                  {...register("contentPost", { required: true })}
                />
                {errors.contentPost && (
                  <div className="invalid-feedback">
                    Este campo es requerido
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-dark">
                Publicar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
