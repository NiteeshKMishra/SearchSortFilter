import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";

import * as stories from "./Filter.stories";

const { FilterPersonGender, FilterProductColor } = composeStories(stories);

test("should render filter", () => {
  render(<FilterPersonGender />);
  const filter = screen.getByTestId("filter-container");
  expect(filter).toBeInTheDocument();
});

test("should render Person Filter", () => {
  const onFilter = jest.fn();
  render(<FilterPersonGender onFilter={onFilter} />);
  const personGenderFilter = screen.getByLabelText(/Gender/i);
  const selectedGenderMaleOption = screen.getByRole("option", {
    name: "Male",
  }) as HTMLOptionElement;

  expect(personGenderFilter).toBeInTheDocument();
  userEvent.selectOptions(personGenderFilter, selectedGenderMaleOption);
  expect(selectedGenderMaleOption.selected).toBe(true);
  expect(onFilter).toHaveBeenCalled();
});

test("should render Product Filter", () => {
  const onFilter = jest.fn();
  render(<FilterProductColor onFilter={onFilter} />);
  const productColorFilter = screen.getByLabelText(/Color/i);
  const selectedRedColorOption = screen.getByRole("option", {
    name: "Red",
  }) as HTMLOptionElement;

  expect(productColorFilter).toBeInTheDocument();
  userEvent.selectOptions(productColorFilter, selectedRedColorOption);
  expect(selectedRedColorOption.selected).toBe(true);
  expect(onFilter).toHaveBeenCalled();
});
