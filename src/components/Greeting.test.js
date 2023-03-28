import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  test("renders Changed! if button IS clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const paragraphElement = screen.getByText("Changed Text!", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });
  test("does not render nice to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const paragraphElement = screen.queryByText("nice to see you here", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
