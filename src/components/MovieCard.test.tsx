import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MovieCard from "../components/MovieCard";

test("renders MovieCard", () => {
  render(
    <MovieCard
      id={1}
      desc={
        "A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved."
      }
      remove={jest.fn()}
    />
  );
  const linkElement = screen.getByTestId("card");
  expect(linkElement).toBeInTheDocument();
});

test("Movie card click event", () => {
  const handleClick = jest.fn();

  render(
    <MovieCard
      id={1}
      desc={
        "A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved."
      }
      remove={handleClick}
    />
  );
  // const linkElement = screen.getByTestId("card-button");
  const linkElement = screen.getByRole("button");  
  fireEvent.click(linkElement);
  expect(handleClick).toHaveBeenCalledTimes(1)
});

test("Vikram title", () => {
  render(
    <MovieCard
      id={1}
      desc={
        "A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved."
      }
      remove={jest.fn()}
    />
  );
  const linkElement = screen.getByText("Vikram 2022");
  expect(linkElement).toBeInTheDocument();
});
