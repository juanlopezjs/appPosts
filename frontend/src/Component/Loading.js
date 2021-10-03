
const Loading = ({isFetching}) => {
  return (
    <div className="text-center">
      {isFetching ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
    </div>
  );
};

export default Loading;
