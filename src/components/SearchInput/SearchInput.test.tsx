import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./SearchInput.stories";

const { SearchPerson, SearchProduct } = composeStories(stories);

test("should render person search", () => {
  const onSearch = jest.fn();
  render(<SearchPerson onSearch={onSearch} />);
  const personSearch = screen.getByLabelText(/person/i);

  expect(personSearch).toBeInTheDocument();
  userEvent.type(personSearch, "hello");
  expect(personSearch).toHaveValue("hello");
  expect(onSearch).toBeCalled();
});

test("should render product search", () => {
  const onSearch = jest.fn();
  render(<SearchProduct onSearch={onSearch} />);
  const productSearch = screen.getByLabelText(/product/i);

  expect(productSearch).toBeInTheDocument();
  userEvent.type(productSearch, "bye");
  expect(productSearch).toHaveValue("bye");
  expect(onSearch).toBeCalled();
});
