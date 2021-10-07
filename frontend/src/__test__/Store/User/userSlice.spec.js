/* eslint-disable no-undef */
import userReducer, { setEmailUser } from "../../../Store/User/userSlice";

describe("user reducer", () => {
  const initialState = {
    email: ""
  };

  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      email: ""
    });
  });

  it("should handle set email user", () => {
    const actual = userReducer(initialState, setEmailUser("test@hotmail.com"));
    expect(actual.email).toEqual(localStorage.getItem("userEmail"));
  });
});
