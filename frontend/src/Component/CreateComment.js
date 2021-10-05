/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateComment } from "../Store/Post/postSlice";
import { selectEmailUser } from "../Store/User/userSlice";

const CreateComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch();
  const emailUser = useSelector(selectEmailUser);
  const history = useHistory();
  const {
    state: { postId }
  } = useLocation();

  const onSubmit = ({ nameComment, contentComment }) => {
    dispatch(
      fetchCreateComment(postId, nameComment, contentComment, emailUser)
    );
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xs-10 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-3 ">
        <div className="card shadow-sm mb-5 bg-body rounded">
          <div className="card-header">
            <h5 className="card-title">Crear comentario</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Nombre del comentario</label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.nameComment ? "is-invalid" : ""
                  }`}
                  {...register("nameComment", { required: true })}
                />
                {errors.nameComment && (
                  <div className="invalid-feedback">
                    Este campo es requerido
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Contenido del comentario</label>
                <textarea
                  className={`form-control ${
                    errors.contentComment ? "is-invalid" : ""
                  }`}
                  {...register("contentComment", { required: true })}
                />
                {errors.contentComment && (
                  <div className="invalid-feedback">
                    Este campo es requerido
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-dark">
                Publicar comentario
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateComment;
