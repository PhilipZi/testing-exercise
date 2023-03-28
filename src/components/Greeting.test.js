import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders nice to see you here if the button was NOT clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("nice to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });
});
