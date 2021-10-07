/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom/extend-expect";
import Posts from "../../../Container/Post/index";
import { render, screen } from "./test-utils";

const { REACT_APP_API_URL } = process.env;

const handlers = [
  rest.get(`${REACT_APP_API_URL}post`, (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          items: [
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
          ]
        }
      }),
      ctx.delay(150)
    )
  )
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a post", async () => {
  render(
    <Router>
      <Posts />
    </Router>
  );

  expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();

  expect(await screen.findByText(/title test/i)).toBeInTheDocument();
});
