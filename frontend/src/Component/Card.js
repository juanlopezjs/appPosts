const Card = ({ user, title, content, date }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div class="d-flex flex-row">
          <div className="p-2">
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="40"
              height="40"
              className="rounded-circle"
            />
          </div>
          <div className="p-2">
            <p>Usuario</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="card-footer">
        <div className="d-flex flex-row">
        <div className="p-2">like</div>
        <div className="p-2">deslike</div>
        <div className="p-2">
          <i className="bi bi-chat"></i>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
