import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Avatar from "../../Component/Avatar";

test("renders container", () => {
  const component = render(<Avatar userEmail="test@email.com" />);
  component.getByText("TE");
});
