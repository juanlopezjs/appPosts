const Card = ({
  userEmail,
  title,
  content,
  likes,
  dislikes,
  numberComments,
  created,
}) => {
  const date = new Date(created);
  const year = new Intl.DateTimeFormat("sp", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("sp", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("sp", { day: "2-digit" }).format(date);
  const hour = new Intl.DateTimeFormat("sp", {
    hour: "2-digit",
    minute: "numeric",
  }).format(date);

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex flex-row align-items-center">
          <div className="p-2">
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="45"
              height="45"
              className="rounded-circle"
            />
          </div>
          <div className="p-2">
            <p className="h6">
              <strong>{userEmail}</strong>
            </p>
            <span>
              <small>{`${hour} ${day} ${month} ${year}`.toLowerCase()}</small>
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
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
          <span className="fw-bold">{numberComments}</span> Comentarios
        </span>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-evenly">
          <div className="p-2">
            <button className="btn">
              <i className="bi bi-hand-thumbs-up fs-5"></i>
            </button>
          </div>
          <div className="p-2">
            <button className="btn">
              <i className="bi bi-hand-thumbs-down fs-5"></i>
            </button>
          </div>
          <div className="p-2">
            <button className="btn">
              <i className="bi bi-chat fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
