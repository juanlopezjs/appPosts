/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "./test-utils";

// Mock
import { posts } from "../../../__mocks__/post.mock";
// Component
import Posts from "../../../Container/Post/index";

const { REACT_APP_API_URL } = process.env;

const handlers = [
  rest.get(`${REACT_APP_API_URL}post`, (req, res, ctx) =>
    res(
      ctx.json({
        data: {
          items: posts
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
