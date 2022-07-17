import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./PersonCard.stories";

const { DefaultPersonCard } = composeStories(stories);

test("should render person card", () => {
  render(<DefaultPersonCard />);
  const personCard = screen.getByTestId(/person-card/i);
  const personImage = screen.getByRole("img");

  expect(personCard).toBeInTheDocument();
  expect(personCard).toContainElement(personImage);
});
