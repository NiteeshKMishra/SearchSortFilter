import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./ProductCard.stories";

const { DefaultProductCard } = composeStories(stories);

test("should render product card", () => {
  render(<DefaultProductCard />);
  const productCard = screen.getByTestId(/product-card/i);
  const productImage = screen.getByRole("img");

  expect(productCard).toBeInTheDocument();
  expect(productCard).toContainElement(productImage);
});
