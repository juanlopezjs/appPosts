/* eslint-disable no-undef */
import postReducer, {
  setPostList,
  updatePost,
  addComment,
  setNewPage,
  setPage,
  setIsFetching
} from "../../../Store/Post/postSlice";

// Mock
import { posts, newPosts, updatedPost } from "../../../__mocks__/post.mock";
import newComment from "../../../__mocks__/comment.mock";

describe("post reducer", () => {
  const initialState = {
    list: posts,
    page: 0,
    newPage: null,
    isFetching: false
  };

  it("should handle initial state", () => {
    expect(postReducer(undefined, { type: "unknown" })).toEqual({
      list: [],
      page: 0,
      newPage: null,
      isFetching: false
    });
  });

  it("should handle set post list", () => {
    const actual = postReducer(initialState, setPostList(newPosts));

    expect(actual.list.length).toEqual(3);
  });

  it("should handle update post", () => {
    const actual = postReducer(initialState, updatePost(updatedPost));
    const index = actual.list.findIndex((item) => item.id === 1);
    expect(actual.list[index].likes).toEqual(2);
  });

  it("should hanlde addComment", () => {
    const actual = postReducer(initialState, addComment(newComment));

    const index = actual.list.findIndex((item) => item.id === 1);
    expect(actual.list[index].Comments.length).toEqual(1);
  });

  it("should handle setNewPage", () => {
    const actual = postReducer(initialState, setNewPage(1));

    expect(actual.newPage).toEqual(1);
  });

  it("should handle setPage", () => {
    const actual = postReducer(initialState, setPage());

    expect(actual.page).toEqual(1);
  });

  it("should handle setIsFetching", () => {
    const actual = postReducer(initialState, setIsFetching(true));

    expect(actual.isFetching).toEqual(true);
  });
});
