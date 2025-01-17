import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

// Smoke Test
it("renders without crashing", () => {
  render(<Card />);
});

// Snapshot Test
it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});