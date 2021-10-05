import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmailUser } from "../Store/User/userSlice";
import { fetchAction } from "../Store/Post/postSlice";
import { formatDateToString } from "../Utils/index";

//Components
import Avatar from "./Avatar";
const Card = ({
  id,
  userEmail,
  name,
  content,
  likes,
  dislikes,
  Comments,
  createdAt,
}) => {
  const emailUser = useSelector(selectEmailUser);
  const dispatch = useDispatch();

  const handleLike = (isLiked) => dispatch(fetchAction(id, isLiked, emailUser));

  return (
    <div className="card shadow-sm bg-body rounded">
      <div className="card-header">
        <div className="d-flex flex-row align-items-center">
          <div className="p-2">
            <Avatar userEmail={userEmail} />
          </div>
          <div className="p-2">
            <p className="h6">
              <strong>{userEmail}</strong>
            </p>
            <span>
              <small>{formatDateToString(createdAt)}</small>
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <Link
            className="link-dark text-decoration-none"
            to={{
              pathname: `/post/${id}`,
              state: {
                id,
                userEmail,
                name,
                content,
                likes,
                dislikes,
                Comments,
                createdAt,
              },
            }}
            title="Ver detalle"
          >
            {name}
          </Link>
        </h5>
        <p className="card-text">{content}</p>
      </div>
      <div className="card-body">
        <span className="card-link text-muted">
          <span className="fw-bold">{likes}</span> Me gusta
        </span>
        <span className="card-link text-muted">
          <span className="fw-bold">{dislikes}</span> No me gusta
        </span>
        <span className="card-link text-muted">
          <span className="fw-bold">{Comments?.length}</span> Comentarios
        </span>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-evenly">
          <div className="p-2">
            <button
              className="btn"
              title="Me gusta"
              onClick={() => handleLike(true)}
            >
              <i className="bi bi-hand-thumbs-up fs-5"></i>
            </button>
          </div>
          <div className="p-2">
            <button
              className="btn"
              title="No me gusta"
              onClick={() => handleLike(false)}
            >
              <i className="bi bi-hand-thumbs-down fs-5"></i>
            </button>
          </div>
          <div className="p-2">
            <Link
              className="btn"
              title="Agregar comentario"
              to={{
                pathname: "/create/comment",
                state: {
                  postId: id,
                },
              }}
            >
              <i className="bi bi-chat fs-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
