/* eslint-disable no-undef */
import postReducer, {
  setPostList,
  updatePost,
  addComment,
  setNewPage,
  setPage,
  setIsFetching
} from "../../../Store/Post/postSlice";

describe("post reducer", () => {
  const initialState = {
    list: [
      {
        id: 1,
        name: "title test",
        content: "content test",
        likes: 0,
        dislikes: 0,
        userEmail: "test@hotmail.com",
        createdAt: "2021-10-06T02:50:30.697Z",
        Comments: []
      }
    ],
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
    const actual = postReducer(
      initialState,
      setPostList([
        {
          id: 2,
          name: "title test",
          content: "content test",
          likes: 0,
          dislikes: 0,
          userEmail: "test@hotmail.com",
          createdAt: "2021-10-06T02:50:30.697Z",
          Comments: []
        },
        {
          id: 3,
          name: "title test",
          content: "content test",
          likes: 0,
          dislikes: 0,
          userEmail: "test@hotmail.com",
          createdAt: "2021-10-06T02:50:30.697Z",
          Comments: []
        }
      ])
    );

    expect(actual.list.length).toEqual(3);
  });

  it("should handle update post", () => {
    const actual = postReducer(
      initialState,
      updatePost({
        id: 1,
        name: "title test",
        content: "content test",
        likes: 2,
        dislikes: 0,
        userEmail: "test@hotmail.com",
        createdAt: "2021-10-06T02:50:30.697Z",
        Comments: []
      })
    );
    const index = actual.list.findIndex((item) => item.id === 1);
    expect(actual.list[index].likes).toEqual(2);
  });

  it("should hanlde addComment", () => {
    const actual = postReducer(
      initialState,
      addComment({
        id: 1,
        name: "titulo de comentario de prueba",
        content: "mensaje de comenatrio de prueba",
        userEmail: "test@hotmail.com",
        PostId: 1,
        createdAt: "2021-10-06T03:14:57.082Z"
      })
    );

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
