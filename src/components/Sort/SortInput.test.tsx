import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import * as stories from "./SortInput.stories";

const { SortPerson, SortProduct } = composeStories(stories);

test("should render Person sort", () => {
  const onOptionSelect = jest.fn();
  render(<SortPerson onOptionSelect={onOptionSelect} />);
  const personSort = screen.getByLabelText(/persons/i);
  const selectedFirstnameOption = screen.getByRole("option", {
    name: "Sort by Firstname Asc",
  }) as HTMLOptionElement;

  expect(personSort).toBeInTheDocument();
  userEvent.selectOptions(personSort, selectedFirstnameOption);
  expect(selectedFirstnameOption.selected).toBe(true);
  expect(onOptionSelect).toHaveBeenCalled();
});

test("should render Product sort", () => {
  const onOptionSelect = jest.fn();
  render(<SortProduct onOptionSelect={onOptionSelect} />);
  const productSort = screen.getByLabelText(/products/i);
  const selectedNameOption = screen.getByRole("option", {
    name: "Sort by Name Desc",
  }) as HTMLOptionElement;

  expect(productSort).toBeInTheDocument();
  userEvent.selectOptions(productSort, selectedNameOption);
  expect(selectedNameOption.selected).toBe(true);
  expect(onOptionSelect).toHaveBeenCalled();
});
