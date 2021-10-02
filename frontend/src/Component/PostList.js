import Card from "./Card";

const PostList = ({ posts }) => {
  return posts.map((post, index) => (
    <div className="">
      <div key={index} className="col-md-8 mb-3">
        <Card />
      </div>
    </div>
  ));
};

export default PostList;
