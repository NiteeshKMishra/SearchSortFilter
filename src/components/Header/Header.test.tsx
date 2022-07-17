import "@testing-library/jest-dom";
import { composeStories } from "@storybook/testing-react";
import { screen, render } from "@testing-library/react";

import * as stories from "./Header.stories";
const { DefaultHeader } = composeStories(stories);

test("should render header", () => {
  render(<DefaultHeader />);
  const header = screen.getByTestId("header");
  const personHeader = screen.getByText(/person/i);
  const productHeader = screen.getByText(/product/i);

  expect(header).toBeInTheDocument();
  expect(header).toContainElement(personHeader);
  expect(header).toContainElement(productHeader);
});
